/*******************************************************************************
 * The MIT License (MIT)
 * Copyright (c) 2016, 2018  Engineering Ingegneria Informatica S.p.A
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
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
