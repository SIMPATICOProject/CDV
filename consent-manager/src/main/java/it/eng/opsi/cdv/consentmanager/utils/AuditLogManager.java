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
package it.eng.opsi.cdv.consentmanager.utils;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class AuditLogManager {

	public static void initFile() {
		File f = new File("log.json");
		if (!f.exists()) {
			try (FileWriter file = new FileWriter("log.json")) {
				file.write("[]");
				file.flush();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public static void addLog(String type, JSONObject obj2) {
		JSONObject obj = new JSONObject();
		obj.put(type, obj2);
		String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
		obj.put("timestamp", timeStamp);
		try {
			RandomAccessFile randomAccessFile = new RandomAccessFile("log.json", "rw");
			long pos = randomAccessFile.length();
			while (randomAccessFile.length() > 0) {
				pos--;
				randomAccessFile.seek(pos);
				if (randomAccessFile.readByte() == ']') {
					randomAccessFile.seek(pos);
					break;
				}
			}
			String jsonElement = obj.toString();
			if (pos > 1)
				randomAccessFile.writeBytes("," + jsonElement + "]");
			else
				randomAccessFile.writeBytes(jsonElement + "]");
			randomAccessFile.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		JSONObject obj = new JSONObject();
		obj.put("name", "mkyong.com");
		obj.put("age", new Integer(100));
		initFile();
		addLog("test", obj);
		addLog("test2", obj);
		System.out.print(obj);
	}

}
