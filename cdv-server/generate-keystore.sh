#!/usr/bin/env bash
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  echo
  echo "usage: ./generate-keystore.sh <alias> <password> <filename>"
  echo
  echo "if no parameters are supplied defaults to: <alias>=masterkey, <password>=password, <filename>=keystore"
  echo
  exit 0
fi
ALIAS=$1
if [ -z "$ALIAS" ]; then
  ALIAS=masterkey
fi
PASSWORD=$2
if [ -z "$PASSWORD" ]; then
  PASSWORD=password
fi
FILENAME=$3
if [ -z "$FILENAME" ]; then
  FILENAME=keystore
fi
echo "generating the keystore ..."

keytool -genseckey -alias "$ALIAS" -keyalg AES -keystore "$FILENAME" -keysize 128 -storetype jceks -storepass "$PASSWORD" -keypass "$PASSWORD"