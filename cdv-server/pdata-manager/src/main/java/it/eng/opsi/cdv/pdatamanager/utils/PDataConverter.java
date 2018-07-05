package it.eng.opsi.cdv.pdatamanager.utils;

import java.io.StringWriter;
import java.lang.reflect.Field;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import com.google.gson.reflect.TypeToken;
import com.opencsv.CSVWriter;

import it.eng.opsi.cdv.pdatarepository.model.PDataEntry;
import it.eng.opsi.cdv.pdatarepository.model.PDataRepositoryException;
import it.eng.opsi.cdv.pdatarepository.model.PDataUtilsException;
import it.eng.opsi.cdv.pdatarepository.utils.DAOUtils;

public class PDataConverter {

	private static DateTimeFormatter fmt = DateTimeFormatter.ISO_OFFSET_DATE_TIME.withZone(ZoneOffset.UTC);

	// BRAIN DAMAGE
	public static String pDataToCSV(List<PDataEntry> entries) {

		StringWriter buffer = new StringWriter();
		CSVWriter csvWriter = new CSVWriter(buffer, ',', CSVWriter.NO_QUOTE_CHARACTER);

		// Count of columns to be created for flattening the PData values array
		int maxValuesColumns = 0;

		// Final CSV rows to be passed to CSVWriter
		List<String[]> records = new ArrayList<String[]>();

		// Fields of PDataEnty class representing the columns to be flattened
		Field[] fields = PDataEntry.class.getDeclaredFields();
		int fieldsCount = fields.length;

		for (PDataEntry entry : entries) {

			List<String> values = entry.getValues();
			int valuesCount = values.size();

			// Final CSV row for the current PDataEntry
			String[] record = new String[fieldsCount - 1 + valuesCount];

			// Update max colums count (for values array)
			maxValuesColumns = valuesCount > maxValuesColumns ? valuesCount : maxValuesColumns;

			for (int i = 0; i < record.length; i++) {

				Field f = fields[i];
				f.setAccessible(true);
				if (!f.getName().equals("values")) {

					try {
						// Current field value of current PData entry
						Object fieldValue = f.get(entry);

						if (f.getType().getClass().equals(String.class))
							record[i] = (String) fieldValue;
						else if (f.getType().getClass().equals(ZonedDateTime.class))
							record[i] = fmt.format(((ZonedDateTime) fieldValue).truncatedTo(ChronoUnit.SECONDS));
						else
							record[i] = fieldValue.toString();

					} catch (IllegalArgumentException | IllegalAccessException e) {
						e.printStackTrace();
					}

				} else {

					int j = 0;
					for (String value : values) {
						record[i + j] = value;
						j++;

					}
					i += j;
				}
			}

			records.add(record);
		}

		// Write first the row of columns names
		csvWriter.writeNext(calculateColumnsNames(fields, maxValuesColumns));
		// Then write the PDataEntry records
		csvWriter.writeAll(records);

		return buffer.toString();

	}

	private static String[] calculateColumnsNames(Field[] fields, int maxValuesColumns) {

		String[] result = new String[fields.length - 1 + maxValuesColumns];

		for (int i = 0; i < result.length; i++) {

			Field f = fields[i];

			f.setAccessible(true);
			String fieldName = f.getName();
			if (!fieldName.equals("values")) {

				result[i] = fieldName;

			} else {

				for (int j = 0; j < maxValuesColumns; j++) {
					result[i + j] = "Value_" + (j + 1);

				}
				i += maxValuesColumns - 1;
			}

		}

		return result;
	}

	public static String pDataToJSON(List<PDataEntry> entries) throws PDataUtilsException {

		return DAOUtils.obj2Json(entries, new TypeToken<ArrayList<PDataEntry>>() {
		}.getType());

	}

}
