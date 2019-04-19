db.createUser(
   {
      user: "cdv-user",
      pwd: "cdv-user",
      roles: [ "readWrite", "dbAdmin" ]
   }
 );


db.pDataFields.drop();
db.pDataFields.insertMany([
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the username or email?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_user_name",
    "metadata": {
      "alias": [
        "username"
      ],
      "forms_reach": [
        77686
      ],
      "synonym": [
        "username",
        "user name",
        "login id",
        "login",
        "user",
        "email",
        "email address"
      ],
      "name": [
        "Username/Email"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/cities"
    },
    "description": "What is the city?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_city",
    "metadata": {
      "alias": [
        "city"
      ],
      "forms_reach": [
        30243
      ],
      "synonym": [
        "city",
        "cty",
        "locality"
      ],
      "name": [
        "City"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What first name do you prefer to go by?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_first_name",
    "metadata": {
      "alias": [
        "firstName"
      ],
      "forms_reach": [
        47805
      ],
      "synonym": [
        "first name",
        "given name"
      ],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/zipcodes"
    },
    "description": "What is the postal code?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_zip_code",
    "metadata": {
      "alias": [
        "postalCode"
      ],
      "forms_reach": [
        38390
      ],
      "synonym": [
        "postal code",
        "zip",
        "zip code",
        "zip/postal"
      ],
      "name": [
        "Postal Code"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number?",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        39337
      ],
      "synonym": [],
      "name": [
        "Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/countries"
    },
    "description": "What is the country?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_country",
    "metadata": {
      "alias": [
        "country"
      ],
      "forms_reach": [
        18940
      ],
      "synonym": [],
      "name": [
        "Country"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/states"
    },
    "description": "What is the state?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_state",
    "metadata": {
      "alias": [
        "state"
      ],
      "forms_reach": [
        22065
      ],
      "synonym": [
        "state",
        "state/province",
        "st"
      ],
      "name": [
        "State"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "enum"
    },
    "description": "What is the street address (second line)?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_street_2",
    "metadata": {
      "alias": [
        "streetAddress2"
      ],
      "forms_reach": [
        16297
      ],
      "synonym": [
        "street address 2",
        "apt",
        "apartment",
        "apartment number",
        "apt num",
        "street address line 2",
        "unit",
        "suite",
        "address 2",
        "street 2"
      ],
      "name": [
        "Street Address 2"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "enum"
    },
    "description": "What is the street address?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_street",
    "metadata": {
      "alias": [
        "streetAddress1"
      ],
      "forms_reach": [
        19544
      ],
      "synonym": [
        "street",
        "street address",
        "street address 1",
        "street address line 1",
        "address 1",
        "address",
        "street 1"
      ],
      "name": [
        "Street Address 1"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Should the site keep you logged in?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "password_stay_logged_in",
    "metadata": {
      "alias": [
        "stayLoggedIn"
      ],
      "forms_reach": [
        16918
      ],
      "synonym": [],
      "name": [
        "Stay Logged In"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the URL for the website?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_website",
    "metadata": {
      "alias": [
        "url"
      ],
      "forms_reach": [
        14107
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If this is a business address, what is the company name?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_company",
    "metadata": {
      "alias": [
        "addressCompany"
      ],
      "forms_reach": [
        11043
      ],
      "synonym": [
        "Company",
        "Company name",
        "Companyname"
      ],
      "name": [
        "Name of Business"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the card number?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "credit_card_number",
    "metadata": {
      "alias": [
        "ccNumber"
      ],
      "forms_reach": [
        7686
      ],
      "synonym": [
        "credit card number",
        "card number",
        "card"
      ],
      "name": [
        "Card Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Should the site remember your username?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "password_remember_username",
    "metadata": {
      "alias": [
        "rememberUsername"
      ],
      "forms_reach": [
        6642
      ],
      "synonym": [],
      "name": [
        "Remember Username"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's personal email?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_email",
    "metadata": {
      "alias": [
        "email"
      ],
      "forms_reach": [
        97417
      ],
      "synonym": [
        "email",
        "e-mail",
        "email address",
        "e-mail address",
        "home email",
        "home e-mail"
      ],
      "name": [
        "Email"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the password?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_password",
    "metadata": {
      "alias": [
        "password"
      ],
      "forms_reach": [
        75868
      ],
      "synonym": [
        "password",
        "pass"
      ],
      "name": [
        "Password"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "expiration_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6413
      ],
      "synonym": [
        "card year",
        "card expiration year",
        "card exp year",
        "expiration year"
      ],
      "name": [
        "Card Expiration Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the credit card's CVV (security) code?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "security_code",
    "metadata": {
      "alias": [
        "ccSecCode"
      ],
      "forms_reach": [
        6127
      ],
      "synonym": [
        "CVC",
        "CVV",
        "security code",
        "credit card security code",
        "card security code",
        "CSC",
        "card verification",
        "verification code"
      ],
      "name": [
        "CVV Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Mr.",
          "value": "Mr."
        },
        {
          "display": "Mrs.",
          "value": "Mrs."
        },
        {
          "display": "Ms.",
          "value": "Ms."
        },
        {
          "display": "Miss",
          "value": "Miss"
        },
        {
          "display": "Dr.",
          "value": "Dr."
        }
      ]
    },
    "description": "What is your title?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "name_title",
    "metadata": {
      "alias": [
        "title"
      ],
      "forms_reach": [
        5520
      ],
      "synonym": [],
      "name": [
        "Title"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What last name do you prefer to go by?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_last_name",
    "metadata": {
      "alias": [
        "lastName"
      ],
      "forms_reach": [
        44834
      ],
      "synonym": [
        "last name",
        "family name",
        "surname"
      ],
      "name": [
        "Last Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name as it appears on the card?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_name_on_card",
    "metadata": {
      "alias": [
        "ccName"
      ],
      "forms_reach": [
        3328
      ],
      "synonym": [
        "name on card",
        "cardholder's name",
        "cardholders name"
      ],
      "name": [
        "Name on Card"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What was/is your position or title at this employer?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_job_title",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2971
      ],
      "synonym": [],
      "name": [
        "Job Title"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/card_network"
    },
    "description": "What network does this card use (Visa, MasterCard, Macy's, etc)?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_network",
    "metadata": {
      "alias": [
        "ccNetwork"
      ],
      "forms_reach": [
        4166
      ],
      "synonym": [],
      "name": [
        "Card Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this company?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_company_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4505
      ],
      "synonym": [],
      "name": [
        "Company Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_birthday.year",
    "metadata": {
      "alias": [
        "birthDate.year"
      ],
      "forms_reach": [
        4534
      ],
      "synonym": [
        "birth year"
      ],
      "name": [
        "Birthday Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2825
      ],
      "synonym": [],
      "name": [
        "Phone Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2791
      ],
      "synonym": [],
      "name": [
        "Phone Number First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the date of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_birthday",
    "metadata": {
      "alias": [
        "birthDate"
      ],
      "forms_reach": [
        2689
      ],
      "synonym": [
        "birthday",
        "birth day",
        "date of birth",
        "birth date",
        "birthdate"
      ],
      "name": [
        "Birthday"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Credit Card",
          "value": "Credit Card"
        },
        {
          "display": "Debit Card",
          "value": "Debit Card"
        },
        {
          "display": "ATM Card",
          "value": "ATM Card"
        }
      ]
    },
    "description": "What kind of card is this (Credit, Debit, ATM)?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_type",
    "metadata": {
      "alias": [
        "ccType"
      ],
      "forms_reach": [
        2637
      ],
      "synonym": [
        "credit card type",
        "cc type",
        "card type"
      ],
      "name": [
        "Payment Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_birthday.day",
    "metadata": {
      "alias": [
        "birthDate.day"
      ],
      "forms_reach": [
        2524
      ],
      "synonym": [],
      "name": [
        "Birthday Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the social security number?",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "social_security_number",
    "metadata": {
      "alias": [
        "ssn"
      ],
      "forms_reach": [
        1885
      ],
      "synonym": [],
      "name": [
        "Social Security Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "initial": {
          "mask": "",
          "display_name": "Initial",
          "id": "initial"
        },
        "full": {
          "mask": "",
          "display_name": "Full",
          "id": "full"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "full"
      }
    },
    "description": "What middle name do you prefer to go by?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_middle_name",
    "metadata": {
      "alias": [
        "middleName"
      ],
      "forms_reach": [
        2468
      ],
      "synonym": [
        "middle name",
        "initial",
        "MI",
        "middle initial"
      ],
      "name": [
        "Middle Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the answer for this security question?",
    "profile_template": {
      "multi": "true",
      "id": "0038",
      "name": "Password Security Question",
      "image_name": "password_security_question.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "security_question_answer",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1429
      ],
      "synonym": [],
      "name": [
        "Secret Answer"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Password Security Question"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the bank account number?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "bank_account_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1478
      ],
      "synonym": [],
      "name": [
        "Account Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the amount that you typically donate?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "donation_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1334
      ],
      "synonym": [],
      "name": [
        "Donation Amount"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1603
      ],
      "synonym": [],
      "name": [
        "Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "expiration_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3818
      ],
      "synonym": [
        "card month",
        "card expiration month",
        "card exp month",
        "expiration month"
      ],
      "name": [
        "Card Expiration Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3384
      ],
      "synonym": [],
      "name": [
        "Phone Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_birthday.month",
    "metadata": {
      "alias": [
        "birthDate.month"
      ],
      "forms_reach": [
        1271
      ],
      "synonym": [
        "birth month"
      ],
      "name": [
        "Birthday Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the security question?",
    "profile_template": {
      "multi": "true",
      "id": "0038",
      "name": "Password Security Question",
      "image_name": "password_security_question.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "security_question",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1151
      ],
      "synonym": [],
      "name": [
        "Secret Question"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Password Security Question"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Male",
          "value": "Male"
        },
        {
          "display": "Female",
          "value": "Female"
        }
      ]
    },
    "description": "What is this person's gender?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_sex",
    "metadata": {
      "alias": [
        "gender"
      ],
      "forms_reach": [
        2881
      ],
      "synonym": [
        "sex",
        "gender"
      ],
      "name": [
        "Gender"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the primary language that this person speaks?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_primary_language_spoken",
    "metadata": {
      "alias": [
        "primaryLanguage"
      ],
      "forms_reach": [
        1098
      ],
      "synonym": [
        "preferred language",
        "language",
        "spoken language"
      ],
      "name": [
        "Primary Language Spoken"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of the school you attended?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "schoole_name",
    "metadata": {
      "alias": [
        "schoolName"
      ],
      "forms_reach": [
        1070
      ],
      "synonym": [],
      "name": [
        "School Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What nickname do you go by?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_nickname",
    "metadata": {
      "alias": [
        "nickname"
      ],
      "forms_reach": [
        1059
      ],
      "synonym": [],
      "name": [
        "Nickname"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Jr.",
          "value": "Jr."
        },
        {
          "display": "Sr.",
          "value": "Sr."
        },
        {
          "display": "I",
          "value": "I"
        },
        {
          "display": "II",
          "value": "II"
        },
        {
          "display": "III",
          "value": "III"
        },
        {
          "display": "IV",
          "value": "IV"
        },
        {
          "display": "V",
          "value": "V"
        }
      ]
    },
    "description": "What is your name suffix?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "name_suffix",
    "metadata": {
      "alias": [
        "suffix"
      ],
      "forms_reach": [
        1127
      ],
      "synonym": [],
      "name": [
        "Suffix"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's other email?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_other_email",
    "metadata": {
      "alias": [],
      "forms_reach": [
        905
      ],
      "synonym": [],
      "name": [
        "Other Email"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "9999",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "social_security_number.last_four",
    "metadata": {
      "alias": [
        "ssn.last_four"
      ],
      "forms_reach": [
        982
      ],
      "synonym": [],
      "name": [
        "Social Security Number Last Four"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the membership number?",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_membership_number",
    "metadata": {
      "alias": [
        "membershipRewardsNumber"
      ],
      "forms_reach": [
        857
      ],
      "synonym": [],
      "name": [
        "Membership Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the county?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_county",
    "metadata": {
      "alias": [],
      "forms_reach": [
        824
      ],
      "synonym": [],
      "name": [
        "County"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What year did you graduate from this school?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_graduation_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        779
      ],
      "synonym": [],
      "name": [
        "Graduation Year"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of the employer?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_employer",
    "metadata": {
      "alias": [],
      "forms_reach": [
        618
      ],
      "synonym": [],
      "name": [
        "Employer/Company"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "In which industry does this company operate?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_industry",
    "metadata": {
      "alias": [],
      "forms_reach": [
        674
      ],
      "synonym": [],
      "name": [
        "Industry"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the driver's license number?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_number",
    "metadata": {
      "alias": [
        "driversLicNumber"
      ],
      "forms_reach": [
        603
      ],
      "synonym": [],
      "name": [
        "Driver's License Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the original loan amount?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "loans_original_loan_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [
        599
      ],
      "synonym": [],
      "name": [
        "Original Loan Amount"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the PIN number?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_pin_number",
    "metadata": {
      "alias": [
        "pin"
      ],
      "forms_reach": [
        562
      ],
      "synonym": [],
      "name": [
        "PIN Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Urban",
          "value": "Urban"
        },
        {
          "display": "Suburban",
          "value": "Suburban"
        },
        {
          "display": "Rural",
          "value": "Rural"
        }
      ]
    },
    "description": "In what setting is your home located?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "location",
    "metadata": {
      "alias": [],
      "forms_reach": [
        595
      ],
      "synonym": [],
      "name": [
        "Location"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What model is your vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "model",
    "metadata": {
      "alias": [
        "carModel"
      ],
      "forms_reach": [
        558
      ],
      "synonym": [],
      "name": [
        "Model"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What was your field of study?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_field_of_study",
    "metadata": {
      "alias": [],
      "forms_reach": [
        533
      ],
      "synonym": [],
      "name": [
        "Field of Study"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/provinces"
    },
    "description": "What is the province?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_provinces",
    "metadata": {
      "alias": [
        "province"
      ],
      "forms_reach": [
        550
      ],
      "synonym": [],
      "name": [
        "Province"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "99",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "social_security_number.middle_two",
    "metadata": {
      "alias": [
        "ssn.middle_two"
      ],
      "forms_reach": [
        498
      ],
      "synonym": [],
      "name": [
        "Social Security Number Middle Two"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "999",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "social_security_number.first_three",
    "metadata": {
      "alias": [
        "ssn.first_three"
      ],
      "forms_reach": [
        497
      ],
      "synonym": [],
      "name": [
        "Social Security Number First Three"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's mother's maiden name?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_mothers_maiden_name",
    "metadata": {
      "alias": [
        "mothersMaidenName"
      ],
      "forms_reach": [
        483
      ],
      "synonym": [],
      "name": [
        "Mother's Maiden Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Checking",
          "value": "Checking"
        },
        {
          "display": "Savings",
          "value": "Savings"
        },
        {
          "display": "CD",
          "value": "CD"
        },
        {
          "display": "Overdraft",
          "value": "Overdraft"
        },
        {
          "display": "HSA",
          "value": "HSA"
        },
        {
          "display": "IRA",
          "value": "IRA"
        },
        {
          "display": "401k",
          "value": "401k"
        }
      ]
    },
    "description": "What type of account is it (checking, savings, etc)?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bank_account_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        481
      ],
      "synonym": [],
      "name": [
        "Account Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/car_manufacturer"
    },
    "description": "What make is your vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "make",
    "metadata": {
      "alias": [
        "carManufacturer"
      ],
      "forms_reach": [
        448
      ],
      "synonym": [],
      "name": [
        "Make"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the EIN for this company?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_ein",
    "metadata": {
      "alias": [],
      "forms_reach": [
        457
      ],
      "synonym": [],
      "name": [
        "EIN"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        475
      ],
      "synonym": [],
      "name": [
        "Phone Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Single",
          "value": "Single"
        },
        {
          "display": "Married",
          "value": "Married"
        },
        {
          "display": "Divorced",
          "value": "Divorced"
        },
        {
          "display": "Separated",
          "value": "Separated"
        },
        {
          "display": "Widowed",
          "value": "Widowed"
        }
      ]
    },
    "description": "What is this person's marital status?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_marital_status",
    "metadata": {
      "alias": [
        "maritalStatus"
      ],
      "forms_reach": [
        444
      ],
      "synonym": [],
      "name": [
        "Marital Status"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the account number?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "bill_account_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        375
      ],
      "synonym": [],
      "name": [
        "Account Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        441
      ],
      "synonym": [],
      "name": [
        "Phone Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Self",
          "value": "Self"
        },
        {
          "display": "Spouse",
          "value": "Spouse"
        },
        {
          "display": "Sibling",
          "value": "Sibling"
        },
        {
          "display": "Parent",
          "value": "Parent"
        },
        {
          "display": "Child",
          "value": "Child"
        },
        {
          "display": "Friend",
          "value": "Friend"
        }
      ]
    },
    "description": "What is your relationship to this person?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_relationship",
    "metadata": {
      "alias": [],
      "forms_reach": [
        364
      ],
      "synonym": [],
      "name": [
        "Relationship"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is your hourly or annual salary income?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_income",
    "metadata": {
      "alias": [],
      "forms_reach": [
        338
      ],
      "synonym": [],
      "name": [
        "Income"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%m/%Y",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "date.month",
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the expiration date for this card?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "expiration_date",
    "metadata": {
      "alias": [
        "ccExpiration"
      ],
      "forms_reach": [
        360
      ],
      "synonym": [
        "card expiration",
        "card exp",
        "expiration date",
        "card expiration date"
      ],
      "name": [
        "Card Expiration Date"
      ],
      "semantic_type": [
        "date.month"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What degree did you receive from this school?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_degree_received",
    "metadata": {
      "alias": [],
      "forms_reach": [
        324
      ],
      "synonym": [],
      "name": [
        "Degree Received"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe your responsibilities in this position.",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_job_description",
    "metadata": {
      "alias": [],
      "forms_reach": [
        314
      ],
      "synonym": [],
      "name": [
        "Job Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this login account.",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        310
      ],
      "synonym": [],
      "name": [
        "Passwords Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Corporation",
          "value": "Corporation"
        },
        {
          "display": "General Partnership",
          "value": "General Partnership"
        },
        {
          "display": "LLC",
          "value": "LLC"
        },
        {
          "display": "LLLP",
          "value": "LLLP"
        },
        {
          "display": "LLP",
          "value": "LLP"
        },
        {
          "display": "LP",
          "value": "LP"
        },
        {
          "display": "PLLC",
          "value": "PLLC"
        },
        {
          "display": "P.C.",
          "value": "P.C."
        },
        {
          "display": "Sole Proprietorship",
          "value": "Sole Proprietorship"
        }
      ]
    },
    "description": "What type of company is this?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_company_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        325
      ],
      "synonym": [],
      "name": [
        "Company Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Male",
          "value": "Male"
        },
        {
          "display": "Female",
          "value": "Female"
        }
      ]
    },
    "description": "What is the sex?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_sex",
    "metadata": {
      "alias": [
        "birthCertGender"
      ],
      "forms_reach": [
        309
      ],
      "synonym": [],
      "name": [
        "Sex"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the loan interest rate?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loans_interest_rate",
    "metadata": {
      "alias": [],
      "forms_reach": [
        305
      ],
      "synonym": [],
      "name": [
        "Interest Rate"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/countries"
    },
    "description": "What is the citizenship?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "citizenship",
    "metadata": {
      "alias": [
        "nationality"
      ],
      "forms_reach": [
        299
      ],
      "synonym": [],
      "name": [
        "Citizenship"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the monthly loan payment?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "loans_monthly_payment",
    "metadata": {
      "alias": [],
      "forms_reach": [
        288
      ],
      "synonym": [],
      "name": [
        "Monthly Payment"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many years have you owned this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "years_at_residence",
    "metadata": {
      "alias": [],
      "forms_reach": [
        271
      ],
      "synonym": [],
      "name": [
        "Years at Residence"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your maiden name?",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_maiden_name",
    "metadata": {
      "alias": [
        "maidenName"
      ],
      "forms_reach": [
        265
      ],
      "synonym": [],
      "name": [
        "Maiden Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the Twitter username?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "twitter_name",
    "metadata": {
      "alias": [
        "twitterUsername"
      ],
      "forms_reach": [
        258
      ],
      "synonym": [],
      "name": [
        "Twitter Username"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Single Family",
          "value": "Single Family"
        },
        {
          "display": "Condominium",
          "value": "Condominium"
        },
        {
          "display": "Duplex",
          "value": "Duplex"
        },
        {
          "display": "Townhome",
          "value": "Townhome"
        },
        {
          "display": "Apartment",
          "value": "Apartment"
        },
        {
          "display": "Co-op",
          "value": "Co-op"
        },
        {
          "display": "2-family Home",
          "value": "2-family Home"
        },
        {
          "display": "3-family Home",
          "value": "3-family Home"
        },
        {
          "display": "4-family Home",
          "value": "4-family Home"
        }
      ]
    },
    "description": "What kind of home is this?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "property_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        302
      ],
      "synonym": [],
      "name": [
        "Property Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your student ID number?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_student_id",
    "metadata": {
      "alias": [],
      "forms_reach": [
        249
      ],
      "synonym": [],
      "name": [
        "Student ID"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the current value of this item?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_complx_trade_in_value",
    "metadata": {
      "alias": [],
      "forms_reach": [
        235
      ],
      "synonym": [],
      "name": [
        "Value"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Caucasian",
          "value": "Caucasian"
        },
        {
          "display": "African American/Black",
          "value": "African American/Black"
        },
        {
          "display": "Hispanic/Latino",
          "value": "Hispanic/Latino"
        },
        {
          "display": "Asian",
          "value": "Asian"
        },
        {
          "display": "Middle eastern",
          "value": "Middle eastern"
        },
        {
          "display": "Pacific Islander",
          "value": "Pacific Islander"
        },
        {
          "display": "Native American/Alaskan",
          "value": "Native American/Alaskan"
        }
      ]
    },
    "description": "What is this person's race/ethnicity?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_race_ethnicity",
    "metadata": {
      "alias": [
        "ethnicity"
      ],
      "forms_reach": [
        250
      ],
      "synonym": [],
      "name": [
        "Race/Ethnicity"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Should the site remember your password?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "password_remember_password",
    "metadata": {
      "alias": [
        "rememberPassword"
      ],
      "forms_reach": [
        235
      ],
      "synonym": [],
      "name": [
        "Remember Password"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about the security.",
    "profile_template": {
      "multi": "true",
      "id": "0038",
      "name": "Password Security Question",
      "image_name": "password_security_question.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "security_question_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        232
      ],
      "synonym": [],
      "name": [
        "Security Question Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Password Security Question"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What employer is this policy under?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_employer",
    "metadata": {
      "alias": [
        "healthInsEmployer"
      ],
      "forms_reach": [
        216
      ],
      "synonym": [],
      "name": [
        "Employer"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter your review here.",
    "profile_template": {
      "multi": "true",
      "id": "0159",
      "name": "Review",
      "image_name": "review.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "review_review",
    "metadata": {
      "alias": [],
      "forms_reach": [
        226
      ],
      "synonym": [],
      "name": [
        "Review"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Review"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Rent",
          "value": "Rent"
        },
        {
          "display": "Own",
          "value": "Own"
        }
      ]
    },
    "description": "Do you rent or own this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rent_own",
    "metadata": {
      "alias": [],
      "forms_reach": [
        206
      ],
      "synonym": [],
      "name": [
        "Rent or Own"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this person's contact info.",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "online_contact_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        193
      ],
      "synonym": [],
      "name": [
        "Contact Info Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the username for that provider?",
    "profile_template": {
      "multi": "true",
      "id": "0002",
      "name": "Instant Messaging",
      "image_name": "instant_messaging.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "im_screen_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        184
      ],
      "synonym": [],
      "name": [
        "IM Username"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Instant Messaging"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Other",
          "value": "Other"
        },
        {
          "display": "2016",
          "value": "2016"
        },
        {
          "display": "2015",
          "value": "2015"
        },
        {
          "display": "2014",
          "value": "2014"
        },
        {
          "display": "2013",
          "value": "2013"
        },
        {
          "display": "2012",
          "value": "2012"
        },
        {
          "display": "2011",
          "value": "2011"
        },
        {
          "display": "2010",
          "value": "2010"
        },
        {
          "display": "2009",
          "value": "2009"
        },
        {
          "display": "2008",
          "value": "2008"
        },
        {
          "display": "2007",
          "value": "2007"
        },
        {
          "display": "2006",
          "value": "2006"
        },
        {
          "display": "2005",
          "value": "2005"
        },
        {
          "display": "2004",
          "value": "2004"
        },
        {
          "display": "2003",
          "value": "2003"
        },
        {
          "display": "2002",
          "value": "2002"
        },
        {
          "display": "2001",
          "value": "2001"
        },
        {
          "display": "2000",
          "value": "2000"
        },
        {
          "display": "1999",
          "value": "1999"
        },
        {
          "display": "1998",
          "value": "1998"
        },
        {
          "display": "1997",
          "value": "1997"
        },
        {
          "display": "1996",
          "value": "1996"
        },
        {
          "display": "1995",
          "value": "1995"
        },
        {
          "display": "1994",
          "value": "1994"
        },
        {
          "display": "1993",
          "value": "1993"
        },
        {
          "display": "1992",
          "value": "1992"
        },
        {
          "display": "1991",
          "value": "1991"
        },
        {
          "display": "1990",
          "value": "1990"
        },
        {
          "display": "1989",
          "value": "1989"
        },
        {
          "display": "1988",
          "value": "1988"
        },
        {
          "display": "1987",
          "value": "1987"
        },
        {
          "display": "1986",
          "value": "1986"
        },
        {
          "display": "1985",
          "value": "1985"
        },
        {
          "display": "1984",
          "value": "1984"
        },
        {
          "display": "1983",
          "value": "1983"
        },
        {
          "display": "1982",
          "value": "1982"
        },
        {
          "display": "1981",
          "value": "1981"
        },
        {
          "display": "1980",
          "value": "1980"
        },
        {
          "display": "1979",
          "value": "1979"
        },
        {
          "display": "1978",
          "value": "1978"
        },
        {
          "display": "1977",
          "value": "1977"
        },
        {
          "display": "1976",
          "value": "1976"
        },
        {
          "display": "1975",
          "value": "1975"
        },
        {
          "display": "1974",
          "value": "1974"
        },
        {
          "display": "1973",
          "value": "1973"
        },
        {
          "display": "1972",
          "value": "1972"
        },
        {
          "display": "1971",
          "value": "1971"
        },
        {
          "display": "1970",
          "value": "1970"
        },
        {
          "display": "1969",
          "value": "1969"
        },
        {
          "display": "1968",
          "value": "1968"
        },
        {
          "display": "1967",
          "value": "1967"
        },
        {
          "display": "1966",
          "value": "1966"
        },
        {
          "display": "1965",
          "value": "1965"
        },
        {
          "display": "1964",
          "value": "1964"
        },
        {
          "display": "1963",
          "value": "1963"
        },
        {
          "display": "1962",
          "value": "1962"
        },
        {
          "display": "1961",
          "value": "1961"
        },
        {
          "display": "1960",
          "value": "1960"
        },
        {
          "display": "1959",
          "value": "1959"
        },
        {
          "display": "1958",
          "value": "1958"
        },
        {
          "display": "1957",
          "value": "1957"
        },
        {
          "display": "1956",
          "value": "1956"
        },
        {
          "display": "1955",
          "value": "1955"
        },
        {
          "display": "1954",
          "value": "1954"
        },
        {
          "display": "1953",
          "value": "1953"
        },
        {
          "display": "1952",
          "value": "1952"
        },
        {
          "display": "1951",
          "value": "1951"
        },
        {
          "display": "1950",
          "value": "1950"
        },
        {
          "display": "1949",
          "value": "1949"
        },
        {
          "display": "1948",
          "value": "1948"
        },
        {
          "display": "1947",
          "value": "1947"
        },
        {
          "display": "1946",
          "value": "1946"
        },
        {
          "display": "1945",
          "value": "1945"
        },
        {
          "display": "1944",
          "value": "1944"
        },
        {
          "display": "1943",
          "value": "1943"
        },
        {
          "display": "1942",
          "value": "1942"
        },
        {
          "display": "1941",
          "value": "1941"
        },
        {
          "display": "1940",
          "value": "1940"
        },
        {
          "display": "1939",
          "value": "1939"
        },
        {
          "display": "1938",
          "value": "1938"
        },
        {
          "display": "1937",
          "value": "1937"
        },
        {
          "display": "1936",
          "value": "1936"
        },
        {
          "display": "1935",
          "value": "1935"
        },
        {
          "display": "1934",
          "value": "1934"
        },
        {
          "display": "1933",
          "value": "1933"
        },
        {
          "display": "1932",
          "value": "1932"
        },
        {
          "display": "1931",
          "value": "1931"
        },
        {
          "display": "1930",
          "value": "1930"
        },
        {
          "display": "1929",
          "value": "1929"
        },
        {
          "display": "1928",
          "value": "1928"
        },
        {
          "display": "1927",
          "value": "1927"
        },
        {
          "display": "1926",
          "value": "1926"
        },
        {
          "display": "1925",
          "value": "1925"
        },
        {
          "display": "1924",
          "value": "1924"
        },
        {
          "display": "1923",
          "value": "1923"
        },
        {
          "display": "1922",
          "value": "1922"
        },
        {
          "display": "1921",
          "value": "1921"
        },
        {
          "display": "1920",
          "value": "1920"
        },
        {
          "display": "1919",
          "value": "1919"
        },
        {
          "display": "1918",
          "value": "1918"
        },
        {
          "display": "1917",
          "value": "1917"
        },
        {
          "display": "1916",
          "value": "1916"
        },
        {
          "display": "1915",
          "value": "1915"
        },
        {
          "display": "1914",
          "value": "1914"
        },
        {
          "display": "1913",
          "value": "1913"
        },
        {
          "display": "1912",
          "value": "1912"
        },
        {
          "display": "1911",
          "value": "1911"
        },
        {
          "display": "1910",
          "value": "1910"
        },
        {
          "display": "1909",
          "value": "1909"
        },
        {
          "display": "1908",
          "value": "1908"
        },
        {
          "display": "1907",
          "value": "1907"
        },
        {
          "display": "1906",
          "value": "1906"
        },
        {
          "display": "1905",
          "value": "1905"
        },
        {
          "display": "1904",
          "value": "1904"
        },
        {
          "display": "1903",
          "value": "1903"
        },
        {
          "display": "1902",
          "value": "1902"
        },
        {
          "display": "1901",
          "value": "1901"
        }
      ]
    },
    "description": "What is the year of manufacture of your vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "year",
    "metadata": {
      "alias": [
        "carYear"
      ],
      "forms_reach": [
        476
      ],
      "synonym": [],
      "name": [
        "Year"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the account number?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_account_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        183
      ],
      "synonym": [],
      "name": [
        "Account Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this occasion?",
    "profile_template": {
      "multi": "true",
      "id": "0155",
      "name": "Occasions",
      "image_name": "occasions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_occasion_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        180
      ],
      "synonym": [],
      "name": [
        "Occasion Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Occasions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "For how long has this alcohol been aged?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_age",
    "metadata": {
      "alias": [],
      "forms_reach": [
        170
      ],
      "synonym": [],
      "name": [
        "Age"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Yearly",
          "value": "Yearly"
        },
        {
          "display": "Monthly",
          "value": "Monthly"
        },
        {
          "display": "Weekly",
          "value": "Weekly"
        },
        {
          "display": "Daily",
          "value": "Daily"
        },
        {
          "display": "One time",
          "value": "One time"
        }
      ]
    },
    "description": "How frequently do you donate to this charity?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "donation_affiliation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        180
      ],
      "synonym": [],
      "name": [
        "Donation Frequency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/states"
    },
    "description": "What state issued the driver's license?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "state_issued_drivers_license",
    "metadata": {
      "alias": [
        "driversLicState"
      ],
      "forms_reach": [
        173
      ],
      "synonym": [],
      "name": [
        "Driver's License State"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's work email?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_secondary_email",
    "metadata": {
      "alias": [
        "secondaryEmail"
      ],
      "forms_reach": [
        167
      ],
      "synonym": [],
      "name": [
        "Work Email"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total income earned from work?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "employment_income",
    "metadata": {
      "alias": [],
      "forms_reach": [
        166
      ],
      "synonym": [
        "annual income",
        "income",
        "yearly income"
      ],
      "name": [
        "Employment Income"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this charity?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        162
      ],
      "synonym": [],
      "name": [
        "Charity Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your vehicle's VIN?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "car_vin",
    "metadata": {
      "alias": [
        "carProductID"
      ],
      "forms_reach": [
        155
      ],
      "synonym": [],
      "name": [
        "VIN"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of the organization funding this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_organization",
    "metadata": {
      "alias": [],
      "forms_reach": [
        159
      ],
      "synonym": [],
      "name": [
        "Organization"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Enter any descriptive information about the product or thing here.",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_description",
    "metadata": {
      "alias": [],
      "forms_reach": [
        159
      ],
      "synonym": [],
      "name": [
        "Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many months have you owned this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "months_at_residence",
    "metadata": {
      "alias": [],
      "forms_reach": [
        143
      ],
      "synonym": [],
      "name": [
        "Months at Residence"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_nick",
    "metadata": {
      "alias": [],
      "forms_reach": [
        140
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/banks"
    },
    "description": "What is the name of the bank?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bank_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        139
      ],
      "synonym": [],
      "name": [
        "Bank Name"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Mortgage",
          "value": "Mortgage"
        },
        {
          "display": "Home Equity",
          "value": "Home Equity"
        },
        {
          "display": "Construction",
          "value": "Construction"
        },
        {
          "display": "Vehicle Loan",
          "value": "Vehicle Loan"
        },
        {
          "display": "School Loan",
          "value": "School Loan"
        },
        {
          "display": "Personal Loan",
          "value": "Personal Loan"
        }
      ]
    },
    "description": "What type of loan is it?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "type_of_loan",
    "metadata": {
      "alias": [],
      "forms_reach": [
        151
      ],
      "synonym": [],
      "name": [
        "Type of Loan"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How many employees does this company have?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_company_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        134
      ],
      "synonym": [],
      "name": [
        "Company Size"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Private Foundation",
          "value": "Private Foundation"
        },
        {
          "display": "Public Foundation",
          "value": "Public Foundation"
        }
      ]
    },
    "description": "What type of charity is this?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        130
      ],
      "synonym": [],
      "name": [
        "Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/cities"
    },
    "description": "What is the city of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_place_of_birth",
    "metadata": {
      "alias": [
        "birthCertCity"
      ],
      "forms_reach": [
        128
      ],
      "synonym": [],
      "name": [
        "City of Birth"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the amount due?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_typical_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [
        127
      ],
      "synonym": [],
      "name": [
        "Payment Amount"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How much does this person weight?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_stats_weight",
    "metadata": {
      "alias": [],
      "forms_reach": [
        126
      ],
      "synonym": [],
      "name": [
        "Weight"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What make is your motorcycle?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_make",
    "metadata": {
      "alias": [],
      "forms_reach": [
        125
      ],
      "synonym": [],
      "name": [
        "Make"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many employees does this company employ?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_number_of_employees",
    "metadata": {
      "alias": [],
      "forms_reach": [
        125
      ],
      "synonym": [],
      "name": [
        "Number of Employees"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What did you pay for this item?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_price_paid",
    "metadata": {
      "alias": [],
      "forms_reach": [
        120
      ],
      "synonym": [],
      "name": [
        "Price Paid"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How tall is this person?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_stats_height",
    "metadata": {
      "alias": [],
      "forms_reach": [
        124
      ],
      "synonym": [],
      "name": [
        "Height"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the member ID number for this policy?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "member_id_number",
    "metadata": {
      "alias": [
        "healthInsMemberID"
      ],
      "forms_reach": [
        116
      ],
      "synonym": [],
      "name": [
        "Member ID Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the URL of the Facebook profile?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "facebook_profile",
    "metadata": {
      "alias": [
        "facebookProfile"
      ],
      "forms_reach": [
        114
      ],
      "synonym": [],
      "name": [
        "Facebook Profile"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "In what region or area is this alcoholic beverage made?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_region",
    "metadata": {
      "alias": [],
      "forms_reach": [
        113
      ],
      "synonym": [],
      "name": [
        "Region"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the bank account's routing number?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "bank_account_routing_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        103
      ],
      "synonym": [],
      "name": [
        "Routing Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the passport number?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "passport_number",
    "metadata": {
      "alias": [
        "passportNumber"
      ],
      "forms_reach": [
        101
      ],
      "synonym": [],
      "name": [
        "Passport Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the rental amount?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "monthly_rent",
    "metadata": {
      "alias": [],
      "forms_reach": [
        100
      ],
      "synonym": [],
      "name": [
        "Rent"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What model is your motorcycle?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_model",
    "metadata": {
      "alias": [],
      "forms_reach": [
        98
      ],
      "synonym": [],
      "name": [
        "Model"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did you start working for this employer?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_start_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        96
      ],
      "synonym": [],
      "name": [
        "Start Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        }
      ]
    },
    "description": "Select your rating.",
    "profile_template": {
      "multi": "true",
      "id": "0159",
      "name": "Review",
      "image_name": "review.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "review_rating",
    "metadata": {
      "alias": [],
      "forms_reach": [
        97
      ],
      "synonym": [],
      "name": [
        "Rating"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Review"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your car's license plate number?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_license_plate_number",
    "metadata": {
      "alias": [
        "carLicensePlate"
      ],
      "forms_reach": [
        96
      ],
      "synonym": [],
      "name": [
        "License Plate Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address for the health insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "website",
    "metadata": {
      "alias": [],
      "forms_reach": [
        94
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What's the phone number to get in touch with this company?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        95
      ],
      "synonym": [],
      "name": [
        "Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the fax number for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fax_number_for_support",
    "metadata": {
      "alias": [],
      "forms_reach": [
        93
      ],
      "synonym": [],
      "name": [
        "Fax Number for Support"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this your current employer?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_current_employer",
    "metadata": {
      "alias": [],
      "forms_reach": [
        92
      ],
      "synonym": [],
      "name": [
        "Current Employer"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What is the date of this occasion?",
    "profile_template": {
      "multi": "true",
      "id": "0155",
      "name": "Occasions",
      "image_name": "occasions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_occasion_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        87
      ],
      "synonym": [],
      "name": [
        "Occasion Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Occasions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the homeowners insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        86
      ],
      "synonym": [],
      "name": [
        "Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the balance of this investment account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_account_balance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        83
      ],
      "synonym": [],
      "name": [
        "Account Balance"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What company issues this statement?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_company",
    "metadata": {
      "alias": [],
      "forms_reach": [
        79
      ],
      "synonym": [],
      "name": [
        "Company"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        79
      ],
      "synonym": [],
      "name": [
        "Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the current outstanding principal amount?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_principal",
    "metadata": {
      "alias": [],
      "forms_reach": [
        78
      ],
      "synonym": [],
      "name": [
        "Outstanding Principal"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many units are in this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "number_of_units",
    "metadata": {
      "alias": [],
      "forms_reach": [
        76
      ],
      "synonym": [],
      "name": [
        "Number of Units"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the URL for the VPN?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vpn_url",
    "metadata": {
      "alias": [],
      "forms_reach": [
        74
      ],
      "synonym": [],
      "name": [
        "VPN URL"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "type": "email"
    },
    "description": "What is the email address?",
    "profile_template": {
      "multi": "true",
      "id": "0158",
      "name": "Place",
      "image_name": "place-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "place_detail_email",
    "metadata": {
      "alias": [],
      "forms_reach": [
        74
      ],
      "synonym": [],
      "name": [
        "Place Email"
      ],
      "semantic_type": [
        "email"
      ]
    },
    "pcategory": "Place"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any information you wish to store as part of this note.",
    "profile_template": {
      "multi": "true",
      "id": "0135",
      "name": "Files Photos & Notes",
      "image_name": "notes_and_files.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "note_note",
    "metadata": {
      "alias": [],
      "forms_reach": [
        74
      ],
      "synonym": [],
      "name": [
        "Note"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Files Photos & Notes"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What are the annual real estate taxes?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "annual_real_estate_taxes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        70
      ],
      "synonym": [],
      "name": [
        "Annual Real Estate Taxes"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the driver's license expire?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_expiration_date",
    "metadata": {
      "alias": [
        "driversLicEndDate"
      ],
      "forms_reach": [
        73
      ],
      "synonym": [],
      "name": [
        "Driver's License Expiration Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this memberhip or rewards program?",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_program_name",
    "metadata": {
      "alias": [
        "membershipRewardsProgramName"
      ],
      "forms_reach": [
        71
      ],
      "synonym": [],
      "name": [
        "Program Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_expiration_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        69
      ],
      "synonym": [],
      "name": [
        "Driver's License Expiration Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Name this place.",
    "profile_template": {
      "multi": "true",
      "id": "0158",
      "name": "Place",
      "image_name": "place-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "place_detail_place_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        64
      ],
      "synonym": [],
      "name": [
        "Place Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Place"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_birthday.day",
    "metadata": {
      "alias": [
        "birthCertBirthDate.day"
      ],
      "forms_reach": [
        68
      ],
      "synonym": [],
      "name": [
        "Date of Birth on Certificate Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_birthday.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        67
      ],
      "synonym": [],
      "name": [
        "Date of Birth on Certificate Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the URL of the LinkedIn profile?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "liinkedIn_profile",
    "metadata": {
      "alias": [],
      "forms_reach": [
        62
      ],
      "synonym": [],
      "name": [
        "LinkedIn Profile"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/countries"
    },
    "description": "What is the country of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_country_of_birth",
    "metadata": {
      "alias": [
        "birthCertCountry"
      ],
      "forms_reach": [
        62
      ],
      "synonym": [],
      "name": [
        "Country of Birth"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional information about this address.",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        60
      ],
      "synonym": [],
      "name": [
        "Address Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the date of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_birthday",
    "metadata": {
      "alias": [
        "birthCertBirthDate"
      ],
      "forms_reach": [
        62
      ],
      "synonym": [],
      "name": [
        "Date of Birth on Certificate"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Private Equity Investment",
          "value": "Private Equity Investment"
        },
        {
          "display": "Hedge Fund Investment",
          "value": "Hedge Fund Investment"
        },
        {
          "display": "IRA Brokerage Account",
          "value": "IRA Brokerage Account"
        },
        {
          "display": "401K Brokerage Account",
          "value": "401K Brokerage Account"
        },
        {
          "display": "529 Account",
          "value": "529 Account"
        },
        {
          "display": "Brokerage Account",
          "value": "Brokerage Account"
        }
      ]
    },
    "description": "What type of brokerage account is it?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_account_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        60
      ],
      "synonym": [],
      "name": [
        "Account Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Other",
          "value": "Other"
        },
        {
          "display": "2016",
          "value": "2016"
        },
        {
          "display": "2015",
          "value": "2015"
        },
        {
          "display": "2014",
          "value": "2014"
        },
        {
          "display": "2013",
          "value": "2013"
        },
        {
          "display": "2012",
          "value": "2012"
        },
        {
          "display": "2011",
          "value": "2011"
        },
        {
          "display": "2010",
          "value": "2010"
        },
        {
          "display": "2009",
          "value": "2009"
        },
        {
          "display": "2008",
          "value": "2008"
        },
        {
          "display": "2007",
          "value": "2007"
        },
        {
          "display": "2006",
          "value": "2006"
        },
        {
          "display": "2005",
          "value": "2005"
        },
        {
          "display": "2004",
          "value": "2004"
        },
        {
          "display": "2003",
          "value": "2003"
        },
        {
          "display": "2002",
          "value": "2002"
        },
        {
          "display": "2001",
          "value": "2001"
        },
        {
          "display": "2000",
          "value": "2000"
        },
        {
          "display": "1999",
          "value": "1999"
        },
        {
          "display": "1998",
          "value": "1998"
        },
        {
          "display": "1997",
          "value": "1997"
        },
        {
          "display": "1996",
          "value": "1996"
        },
        {
          "display": "1995",
          "value": "1995"
        },
        {
          "display": "1994",
          "value": "1994"
        },
        {
          "display": "1993",
          "value": "1993"
        },
        {
          "display": "1992",
          "value": "1992"
        },
        {
          "display": "1991",
          "value": "1991"
        },
        {
          "display": "1990",
          "value": "1990"
        },
        {
          "display": "1989",
          "value": "1989"
        },
        {
          "display": "1988",
          "value": "1988"
        },
        {
          "display": "1987",
          "value": "1987"
        },
        {
          "display": "1986",
          "value": "1986"
        },
        {
          "display": "1985",
          "value": "1985"
        },
        {
          "display": "1984",
          "value": "1984"
        },
        {
          "display": "1983",
          "value": "1983"
        },
        {
          "display": "1982",
          "value": "1982"
        },
        {
          "display": "1981",
          "value": "1981"
        },
        {
          "display": "1980",
          "value": "1980"
        },
        {
          "display": "1979",
          "value": "1979"
        },
        {
          "display": "1978",
          "value": "1978"
        },
        {
          "display": "1977",
          "value": "1977"
        },
        {
          "display": "1976",
          "value": "1976"
        },
        {
          "display": "1975",
          "value": "1975"
        },
        {
          "display": "1974",
          "value": "1974"
        },
        {
          "display": "1973",
          "value": "1973"
        },
        {
          "display": "1972",
          "value": "1972"
        },
        {
          "display": "1971",
          "value": "1971"
        },
        {
          "display": "1970",
          "value": "1970"
        },
        {
          "display": "1969",
          "value": "1969"
        },
        {
          "display": "1968",
          "value": "1968"
        },
        {
          "display": "1967",
          "value": "1967"
        },
        {
          "display": "1966",
          "value": "1966"
        },
        {
          "display": "1965",
          "value": "1965"
        },
        {
          "display": "1964",
          "value": "1964"
        },
        {
          "display": "1963",
          "value": "1963"
        },
        {
          "display": "1962",
          "value": "1962"
        },
        {
          "display": "1961",
          "value": "1961"
        },
        {
          "display": "1960",
          "value": "1960"
        },
        {
          "display": "1959",
          "value": "1959"
        },
        {
          "display": "1958",
          "value": "1958"
        },
        {
          "display": "1957",
          "value": "1957"
        },
        {
          "display": "1956",
          "value": "1956"
        },
        {
          "display": "1955",
          "value": "1955"
        },
        {
          "display": "1954",
          "value": "1954"
        },
        {
          "display": "1953",
          "value": "1953"
        },
        {
          "display": "1952",
          "value": "1952"
        },
        {
          "display": "1951",
          "value": "1951"
        },
        {
          "display": "1950",
          "value": "1950"
        },
        {
          "display": "1949",
          "value": "1949"
        },
        {
          "display": "1948",
          "value": "1948"
        },
        {
          "display": "1947",
          "value": "1947"
        },
        {
          "display": "1946",
          "value": "1946"
        },
        {
          "display": "1945",
          "value": "1945"
        },
        {
          "display": "1944",
          "value": "1944"
        },
        {
          "display": "1943",
          "value": "1943"
        },
        {
          "display": "1942",
          "value": "1942"
        },
        {
          "display": "1941",
          "value": "1941"
        },
        {
          "display": "1940",
          "value": "1940"
        },
        {
          "display": "1939",
          "value": "1939"
        },
        {
          "display": "1938",
          "value": "1938"
        },
        {
          "display": "1937",
          "value": "1937"
        },
        {
          "display": "1936",
          "value": "1936"
        },
        {
          "display": "1935",
          "value": "1935"
        },
        {
          "display": "1934",
          "value": "1934"
        },
        {
          "display": "1933",
          "value": "1933"
        },
        {
          "display": "1932",
          "value": "1932"
        },
        {
          "display": "1931",
          "value": "1931"
        },
        {
          "display": "1930",
          "value": "1930"
        },
        {
          "display": "1929",
          "value": "1929"
        },
        {
          "display": "1928",
          "value": "1928"
        },
        {
          "display": "1927",
          "value": "1927"
        },
        {
          "display": "1926",
          "value": "1926"
        },
        {
          "display": "1925",
          "value": "1925"
        },
        {
          "display": "1924",
          "value": "1924"
        },
        {
          "display": "1923",
          "value": "1923"
        },
        {
          "display": "1922",
          "value": "1922"
        },
        {
          "display": "1921",
          "value": "1921"
        },
        {
          "display": "1920",
          "value": "1920"
        },
        {
          "display": "1919",
          "value": "1919"
        },
        {
          "display": "1918",
          "value": "1918"
        },
        {
          "display": "1917",
          "value": "1917"
        },
        {
          "display": "1916",
          "value": "1916"
        },
        {
          "display": "1915",
          "value": "1915"
        },
        {
          "display": "1914",
          "value": "1914"
        },
        {
          "display": "1913",
          "value": "1913"
        },
        {
          "display": "1912",
          "value": "1912"
        },
        {
          "display": "1911",
          "value": "1911"
        },
        {
          "display": "1910",
          "value": "1910"
        },
        {
          "display": "1909",
          "value": "1909"
        },
        {
          "display": "1908",
          "value": "1908"
        },
        {
          "display": "1907",
          "value": "1907"
        },
        {
          "display": "1906",
          "value": "1906"
        },
        {
          "display": "1905",
          "value": "1905"
        },
        {
          "display": "1904",
          "value": "1904"
        },
        {
          "display": "1903",
          "value": "1903"
        },
        {
          "display": "1902",
          "value": "1902"
        },
        {
          "display": "1901",
          "value": "1901"
        }
      ]
    },
    "description": "In what year was this home built?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "year_built",
    "metadata": {
      "alias": [],
      "forms_reach": [
        101
      ],
      "synonym": [],
      "name": [
        "Year Built"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What was the overall score for the test or assessment?",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "testscore_overall_score",
    "metadata": {
      "alias": [],
      "forms_reach": [
        57
      ],
      "synonym": [],
      "name": [
        "Overall Score"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the PIN number?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "loans_pin_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        60
      ],
      "synonym": [],
      "name": [
        "PIN Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many miles per gallon does this vehicle get?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_miles_per_gallon",
    "metadata": {
      "alias": [],
      "forms_reach": [
        59
      ],
      "synonym": [],
      "name": [
        "Miles per Gallon"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What options does your vehicle have?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_options",
    "metadata": {
      "alias": [],
      "forms_reach": [
        56
      ],
      "synonym": [],
      "name": [
        "Options"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What account is the money transferred from?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "source_of_funds",
    "metadata": {
      "alias": [],
      "forms_reach": [
        56
      ],
      "synonym": [],
      "name": [
        "Source of Funds"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No interest",
          "value": "No interest"
        }
      ]
    },
    "description": "What is the account interest rate?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_interest_rate",
    "metadata": {
      "alias": [],
      "forms_reach": [
        55
      ],
      "synonym": [],
      "name": [
        "Interest Rate"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What date was the driver's license issued?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_issue_date",
    "metadata": {
      "alias": [
        "driversLicStartDate"
      ],
      "forms_reach": [
        57
      ],
      "synonym": [],
      "name": [
        "Driver's License Issue Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Christian",
          "value": "Christian"
        },
        {
          "display": "Baha'i",
          "value": "Baha'i"
        },
        {
          "display": "Buddhist",
          "value": "Buddhist"
        },
        {
          "display": "Hindu",
          "value": "Hindu"
        },
        {
          "display": "Jewish",
          "value": "Jewish"
        },
        {
          "display": "Muslim",
          "value": "Muslim"
        },
        {
          "display": "Sikh",
          "value": "Sikh"
        },
        {
          "display": "Zionist",
          "value": "Zionist"
        },
        {
          "display": "Other",
          "value": "Other"
        }
      ]
    },
    "description": "What religion do you identify with?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_religion",
    "metadata": {
      "alias": [],
      "forms_reach": [
        55
      ],
      "synonym": [],
      "name": [
        "Religion"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the health insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_policy_number",
    "metadata": {
      "alias": [
        "healthInsPolicyNumber"
      ],
      "forms_reach": [
        53
      ],
      "synonym": [],
      "name": [
        "Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/cities"
    },
    "description": "What city is this employer located in?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_current_employer_city",
    "metadata": {
      "alias": [],
      "forms_reach": [
        53
      ],
      "synonym": [],
      "name": [
        "Employer City"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Restaurant",
          "value": "Restaurant"
        },
        {
          "display": "Nightlife",
          "value": "Nightlife"
        },
        {
          "display": "Accommodations",
          "value": "Accommodations"
        },
        {
          "display": "Fitness",
          "value": "Fitness"
        },
        {
          "display": "Entertainment/Pastimes",
          "value": "Entertainment/Pastimes"
        },
        {
          "display": "Shopping",
          "value": "Shopping"
        },
        {
          "display": "Wellness/Beauty",
          "value": "Wellness/Beauty"
        },
        {
          "display": "Education/Childcare",
          "value": "Education/Childcare"
        },
        {
          "display": "Transportation",
          "value": "Transportation"
        },
        {
          "display": "Utilities",
          "value": "Utilities"
        },
        {
          "display": "Place of Interest/Attractions",
          "value": "Place of Interest/Attractions"
        },
        {
          "display": "Pet's",
          "value": "Pet's"
        },
        {
          "display": "Home",
          "value": "Home"
        },
        {
          "display": "Office",
          "value": "Office"
        }
      ]
    },
    "description": "Pick a category for this address.",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_category",
    "metadata": {
      "alias": [
        "addressType"
      ],
      "forms_reach": [
        58
      ],
      "synonym": [],
      "name": [
        "Address Category"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your vehicle's trim style?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_trim_style",
    "metadata": {
      "alias": [],
      "forms_reach": [
        52
      ],
      "synonym": [],
      "name": [
        "Trim Style"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the code to arm and disarm the alarm?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "alarm_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        53
      ],
      "synonym": [],
      "name": [
        "Alarm Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the annual bonus received?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_bonus",
    "metadata": {
      "alias": [],
      "forms_reach": [
        52
      ],
      "synonym": [],
      "name": [
        "Bonus"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the exterior color of your vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        50
      ],
      "synonym": [],
      "name": [
        "Exterior Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Representative",
          "value": "Representative"
        },
        {
          "display": "Volunteer",
          "value": "Volunteer"
        },
        {
          "display": "Donor",
          "value": "Donor"
        }
      ]
    },
    "description": "What is your affiliation with this charity?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_affiliation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        52
      ],
      "synonym": [],
      "name": [
        "Affiliation"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this job.",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        49
      ],
      "synonym": [],
      "name": [
        "Work Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many bedrooms does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "number_bedrooms",
    "metadata": {
      "alias": [],
      "forms_reach": [
        54
      ],
      "synonym": [],
      "name": [
        "Number of Bedrooms"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the adjusted gross income?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "adjusted_gross_income",
    "metadata": {
      "alias": [],
      "forms_reach": [
        55
      ],
      "synonym": [],
      "name": [
        "Adjusted Gross Income"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the total balance on this account?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_total_balance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        49
      ],
      "synonym": [],
      "name": [
        "Total Balance"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How many bathrooms does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "number_bathrooms",
    "metadata": {
      "alias": [],
      "forms_reach": [
        49
      ],
      "synonym": [],
      "name": [
        "Number of Bathrooms"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did you stop working for this employer?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_end_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        54
      ],
      "synonym": [],
      "name": [
        "End Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this credit or debit card.",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        49
      ],
      "synonym": [],
      "name": [
        "Credit & Debit Card Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the health insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insurance_provider",
    "metadata": {
      "alias": [
        "healthInsProvider"
      ],
      "forms_reach": [
        49
      ],
      "synonym": [],
      "name": [
        "Insurance Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this pet?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        46
      ],
      "synonym": [],
      "name": [
        "Pet Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_issue_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        46
      ],
      "synonym": [],
      "name": [
        "Driver's License Issue Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did you start attending this school?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_start_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        45
      ],
      "synonym": [],
      "name": [
        "Start Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the estimated value of the collateral?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "collateral_value",
    "metadata": {
      "alias": [],
      "forms_reach": [
        45
      ],
      "synonym": [],
      "name": [
        "Collateral Value"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for support for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number",
    "metadata": {
      "alias": [
        "ccTelephone"
      ],
      "forms_reach": [
        46
      ],
      "synonym": [],
      "name": [
        "Card Contact Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Tell us about yourself. Be concise. (500 Character Limit)",
    "profile_template": {
      "multi": "true",
      "id": "0091",
      "name": "Bio",
      "image_name": "biography.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "short_bio",
    "metadata": {
      "alias": [],
      "forms_reach": [
        44
      ],
      "synonym": [],
      "name": [
        "Short Bio"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bio"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this school.",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        43
      ],
      "synonym": [],
      "name": [
        "Education Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Former Smoker",
          "value": "Former Smoker"
        }
      ]
    },
    "description": "Does this person regularly use tobacco?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_basic_tobacco_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        43
      ],
      "synonym": [],
      "name": [
        "Tobacco Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the revenue and income for this year.",
    "profile_template": {
      "multi": "true",
      "id": "0161",
      "name": "Revenue & Income",
      "image_name": "revenue_income.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_revenue_income_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        43
      ],
      "synonym": [],
      "name": [
        "Revenue & Income Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Revenue & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the DBA name for this company?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_dba_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        42
      ],
      "synonym": [],
      "name": [
        "DBA Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of the primary member on the policy?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "member_name",
    "metadata": {
      "alias": [
        "healthInsPolicyHolder"
      ],
      "forms_reach": [
        41
      ],
      "synonym": [],
      "name": [
        "Member Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this company.",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_revenue_detail_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        42
      ],
      "synonym": [],
      "name": [
        "Business Detail Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What type of surgery was performed?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        40
      ],
      "synonym": [],
      "name": [
        "Type"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "If this position is commission based, what was the annual commission?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_commission",
    "metadata": {
      "alias": [],
      "forms_reach": [
        40
      ],
      "synonym": [],
      "name": [
        "Commission"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/states"
    },
    "description": "What state is this employer located in?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_current_employer_state",
    "metadata": {
      "alias": [],
      "forms_reach": [
        40
      ],
      "synonym": [],
      "name": [
        "Employer State"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        39
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When is your final loan payment date (payoff date)?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_payoff_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        39
      ],
      "synonym": [],
      "name": [
        "Loan Payoff Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_expiration_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        39
      ],
      "synonym": [],
      "name": [
        "Driver's License Expiration Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        38
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        39
      ],
      "synonym": [],
      "name": [
        "Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your favorite alcoholic drink?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_your_drink",
    "metadata": {
      "alias": [],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Your Drink"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What neighborhood is this location in?",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_neighborhood",
    "metadata": {
      "alias": [],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Neighborhood"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Primary Residence",
          "value": "Primary Residence"
        },
        {
          "display": "Secondary Residence",
          "value": "Secondary Residence"
        },
        {
          "display": "Seasonal Residence",
          "value": "Seasonal Residence"
        },
        {
          "display": "Vacation Home",
          "value": "Vacation Home"
        },
        {
          "display": "Rental",
          "value": "Rental"
        }
      ]
    },
    "description": "What is the primary purpose of this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "occupancy_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Occupancy Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this home.",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basics_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Home Details Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Dog",
          "value": "Dog"
        },
        {
          "display": "Cat",
          "value": "Cat"
        },
        {
          "display": "Fish",
          "value": "Fish"
        },
        {
          "display": "Bird",
          "value": "Bird"
        },
        {
          "display": "Horse",
          "value": "Horse"
        },
        {
          "display": "Rabbit",
          "value": "Rabbit"
        },
        {
          "display": "Turtle",
          "value": "Turtle"
        },
        {
          "display": "Hamster",
          "value": "Hamster"
        },
        {
          "display": "Lizard",
          "value": "Lizard"
        },
        {
          "display": "Guinea Pig",
          "value": "Guinea Pig"
        },
        {
          "display": "Snake",
          "value": "Snake"
        }
      ]
    },
    "description": "What type of pet is this?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Pet Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the group number?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "group_number",
    "metadata": {
      "alias": [
        "healthInsGroupNumber"
      ],
      "forms_reach": [
        37
      ],
      "synonym": [],
      "name": [
        "Group Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How much have you donated overall?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "total_donation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        36
      ],
      "synonym": [],
      "name": [
        "Total Donation"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "In which neighborhood is this home located?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_neighborhood",
    "metadata": {
      "alias": [],
      "forms_reach": [
        36
      ],
      "synonym": [],
      "name": [
        "Neighborhood"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about the rules.",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_rules_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        36
      ],
      "synonym": [],
      "name": [
        "Login Rules Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the move in date?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_in_date",
    "metadata": {
      "alias": [
        "moveInDate"
      ],
      "forms_reach": [
        36
      ],
      "synonym": [],
      "name": [
        "Move In Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Business",
          "value": "Business"
        },
        {
          "display": "Commute",
          "value": "Commute"
        },
        {
          "display": "Farm",
          "value": "Farm"
        },
        {
          "display": "Pleasure",
          "value": "Pleasure"
        }
      ]
    },
    "description": "For what purpose do you use this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_vehicle_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Vehicle Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this personal profile.",
    "profile_template": {
      "multi": "true",
      "id": "0144",
      "name": "Personal Profile",
      "image_name": "personalme.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_profile_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Personal Profile Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Profile"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did you leave this school?",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_end_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "End Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Phone Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the coverage amount of the life insurance?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_coverage_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Coverage Amount"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe any activities you were involved in at this school.",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_activities",
    "metadata": {
      "alias": [],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Activities"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_birthday.month",
    "metadata": {
      "alias": [
        "birthCertBirthDate.month"
      ],
      "forms_reach": [
        35
      ],
      "synonym": [],
      "name": [
        "Date of Birth on Certificate Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_expiration_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        33
      ],
      "synonym": [],
      "name": [
        "Passport Expiration Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the nearest cross-street to this location?",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_nearest_cross_streets",
    "metadata": {
      "alias": [],
      "forms_reach": [
        33
      ],
      "synonym": [],
      "name": [
        "Nearest Cross Streets"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the loan account number?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "loans_account_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        33
      ],
      "synonym": [],
      "name": [
        "Account Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What type of tax form(s) were filed?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_form",
    "metadata": {
      "alias": [],
      "forms_reach": [
        32
      ],
      "synonym": [],
      "name": [
        "Tax Form"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "U.S. Citizen",
          "value": "U.S. Citizen"
        },
        {
          "display": "Non-permanent Resident",
          "value": "Non-permanent Resident"
        },
        {
          "display": "Permanent Resident Alien",
          "value": "Permanent Resident Alien"
        }
      ]
    },
    "description": "What is this person's residency status?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_residency",
    "metadata": {
      "alias": [
        "residency"
      ],
      "forms_reach": [
        32
      ],
      "synonym": [],
      "name": [
        "Residency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Tell us about yourself. Elaborate as much as possible.",
    "profile_template": {
      "multi": "true",
      "id": "0091",
      "name": "Bio",
      "image_name": "biography.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bio",
    "metadata": {
      "alias": [],
      "forms_reach": [
        31
      ],
      "synonym": [],
      "name": [
        "Bio"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bio"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Which bank is the lender?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "lender",
    "metadata": {
      "alias": [],
      "forms_reach": [
        31
      ],
      "synonym": [],
      "name": [
        "Lender"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your auto insurance ID number?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "car_insurance_id_number",
    "metadata": {
      "alias": [
        "carInsuranceNumber"
      ],
      "forms_reach": [
        30
      ],
      "synonym": [],
      "name": [
        "Car Insurance ID Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/car_insurance_provider"
    },
    "description": "Who is the current auto insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "insurance_provider",
    "metadata": {
      "alias": [
        "carInsuranceProvider"
      ],
      "forms_reach": [
        30
      ],
      "synonym": [],
      "name": [
        "Vehicle Insurance Provider"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "AOL",
          "value": "AOL"
        },
        {
          "display": "Gmail",
          "value": "Gmail"
        },
        {
          "display": "ICQ",
          "value": "ICQ"
        },
        {
          "display": "Skype",
          "value": "Skype"
        },
        {
          "display": "Windows Live",
          "value": "Windows Live"
        },
        {
          "display": "Yahoo!",
          "value": "Yahoo!"
        }
      ]
    },
    "description": "Which provider is this account with?",
    "profile_template": {
      "multi": "true",
      "id": "0002",
      "name": "Instant Messaging",
      "image_name": "instant_messaging.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "im_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        27
      ],
      "synonym": [],
      "name": [
        "IM Provider Name"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Instant Messaging"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What category of product or thing is this?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_category",
    "metadata": {
      "alias": [],
      "forms_reach": [
        29
      ],
      "synonym": [],
      "name": [
        "Product/Thing Category"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Aggressive",
          "value": "Aggressive"
        },
        {
          "display": "Anxious",
          "value": "Anxious"
        },
        {
          "display": "Confident",
          "value": "Confident"
        },
        {
          "display": "Creative",
          "value": "Creative"
        },
        {
          "display": "Dependent",
          "value": "Dependent"
        },
        {
          "display": "Enthusiastic",
          "value": "Enthusiastic"
        },
        {
          "display": "Friendly",
          "value": "Friendly"
        },
        {
          "display": "Gentle",
          "value": "Gentle"
        },
        {
          "display": "Impatient",
          "value": "Impatient"
        },
        {
          "display": "Independent",
          "value": "Independent"
        },
        {
          "display": "Kind",
          "value": "Kind"
        },
        {
          "display": "Patient",
          "value": "Patient"
        },
        {
          "display": "Outgoing",
          "value": "Outgoing"
        },
        {
          "display": "Shy",
          "value": "Shy"
        },
        {
          "display": "Tentative",
          "value": "Tentative"
        }
      ]
    },
    "description": "What are some good adjectives to describe this person?",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "some_adjectives_about_child",
    "metadata": {
      "alias": [],
      "forms_reach": [
        31
      ],
      "synonym": [],
      "name": [
        "Some Adjectives About This Person"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What size engine does your vehicle have?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_engine",
    "metadata": {
      "alias": [],
      "forms_reach": [
        27
      ],
      "synonym": [],
      "name": [
        "Engine"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address (URL) for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_website_address",
    "metadata": {
      "alias": [
        "passwordsURL"
      ],
      "forms_reach": [
        26
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any specific detail about this loan.",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        26
      ],
      "synonym": [],
      "name": [
        "Loan Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/states"
    },
    "description": "What is the state of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_state_of_birth",
    "metadata": {
      "alias": [],
      "forms_reach": [
        26
      ],
      "synonym": [],
      "name": [
        "State of Birth"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe any awards you received while attending this school.",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_awards",
    "metadata": {
      "alias": [],
      "forms_reach": [
        26
      ],
      "synonym": [],
      "name": [
        "Awards"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        28
      ],
      "synonym": [],
      "name": [
        "Phone Number First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/states"
    },
    "description": "In which state is your vehicle currently registered?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_license_plate_issuing_state",
    "metadata": {
      "alias": [
        "carLicensePlateState"
      ],
      "forms_reach": [
        30
      ],
      "synonym": [],
      "name": [
        "License Plate Issuing State"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "On what date did you calculate the value?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_complx_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        30
      ],
      "synonym": [],
      "name": [
        "Date"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "initial": {
          "mask": "",
          "display_name": "Initial",
          "id": "initial"
        },
        "full": {
          "mask": "",
          "display_name": "Full",
          "id": "full"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "full"
      }
    },
    "description": "What is the middle name as it appears on the driver's license?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "middle_name_on_drivers_license",
    "metadata": {
      "alias": [
        "driversLicMiddleName"
      ],
      "forms_reach": [
        26
      ],
      "synonym": [],
      "name": [
        "Middle Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this membership or rewards program.",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        25
      ],
      "synonym": [],
      "name": [
        "Membership & Rewards Program Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_issue_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        24
      ],
      "synonym": [],
      "name": [
        "Driver's License Issue Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Bi-weekly",
          "value": "Bi-weekly"
        },
        {
          "display": "Monthly",
          "value": "Monthly"
        },
        {
          "display": "Quarterly",
          "value": "Quarterly"
        },
        {
          "display": "Annually",
          "value": "Annually"
        }
      ]
    },
    "description": "At what frequency is this bill payed?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "payment_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        24
      ],
      "synonym": [],
      "name": [
        "Payment Frequency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        23
      ],
      "synonym": [],
      "name": [
        "Phone Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What other languages does this person speak?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_other_language_spoken",
    "metadata": {
      "alias": [
        "otherLanguages"
      ],
      "forms_reach": [
        23
      ],
      "synonym": [],
      "name": [
        "Other Languages Spoken"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "my_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        23
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your relationship with this charity.",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        23
      ],
      "synonym": [],
      "name": [
        "Charity Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What transmission type does your vehicle have?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_transmission",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Transmission"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Personal",
          "value": "Personal"
        },
        {
          "display": "Work",
          "value": "Work"
        }
      ]
    },
    "description": "What kind of contact info is this?",
    "profile_template": {
      "multi": "true",
      "id": "0001",
      "name": "Contact Info",
      "image_name": "contactmehome.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_info_type",
    "metadata": {
      "alias": [
        "contactType"
      ],
      "forms_reach": [
        22
      ],
      "synonym": [],
      "name": [
        "Contact Info Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Contact Info"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/pet_breed"
    },
    "description": "What is the breed of this pet?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_breed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Pet Breed"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did you purchase this item?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_purchase_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Purchase Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about these instructions.",
    "profile_template": {
      "multi": "true",
      "id": "0164",
      "name": "Recipes & Instructions",
      "image_name": "instructions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "instructions_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Instructions Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Recipes & Instructions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who or what is this charity designed to help?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_mission",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Mission"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Blue",
          "value": "Blue"
        },
        {
          "display": "Green",
          "value": "Green"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Hazel",
          "value": "Hazel"
        }
      ]
    },
    "description": "What is this person's eye color?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vision_eye_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Eye Color"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this credit score.",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_score_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Credit Score Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What color is your motorcycle?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total amount from cash, checking and savings?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "cash_assets",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Cash Assets"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If you like to wear sports-affiliated clothing, which team do root for?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_sports_affiliation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Sports Affiliation"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the annual premium for this policy?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_annual_premium",
    "metadata": {
      "alias": [],
      "forms_reach": [
        21
      ],
      "synonym": [],
      "name": [
        "Annual Premium"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where was this items purchased from?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_purchase_at",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Purchased At"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What type of product or thing is this?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Product/Thing Type"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What police district was this police officer from?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_department",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Police Department"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the life insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "life_life_insurance_policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Life Insurance Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "0.5",
          "value": "0.5"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "1.5",
          "value": "1.5"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "2.5",
          "value": "2.5"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "3.5",
          "value": "3.5"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "4.5",
          "value": "4.5"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "5.5",
          "value": "5.5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "6.5",
          "value": "6.5"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "7.5",
          "value": "7.5"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "8.5",
          "value": "8.5"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "9.5",
          "value": "9.5"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "10.5",
          "value": "10.5"
        },
        {
          "display": "11",
          "value": "11"
        },
        {
          "display": "11.5",
          "value": "11.5"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "12.5",
          "value": "12.5"
        },
        {
          "display": "13",
          "value": "13"
        },
        {
          "display": "13.5",
          "value": "13.5"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "14.5",
          "value": "14.5"
        },
        {
          "display": "15",
          "value": "15"
        },
        {
          "display": "15+",
          "value": "15+"
        }
      ]
    },
    "description": "What size shoe do you wear?",
    "profile_template": {
      "multi": "true",
      "id": "0165",
      "name": "Shoe Size",
      "image_name": "womensshoes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shoe_pref_shoe_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        25
      ],
      "synonym": [],
      "name": [
        "Shoe Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Shoe Size"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Owned",
          "value": "Owned"
        },
        {
          "display": "Financed",
          "value": "Financed"
        },
        {
          "display": "Leased",
          "value": "Leased"
        }
      ]
    },
    "description": "Is this vehicle owned, financed or leased?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_ownership",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Ownership"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the homeowners insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "homeowners_insurance_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Insurance Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe any other identifying information about this person (birthmarks, scars, physical attributes).",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_identifying_information",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Identifying Information"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the first name as it appears on the driver's license?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "first_name_on_drivers_license",
    "metadata": {
      "alias": [
        "driversLicFirstName"
      ],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Auburn",
          "value": "Auburn"
        },
        {
          "display": "Chestnut",
          "value": "Chestnut"
        },
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "Blond",
          "value": "Blond"
        },
        {
          "display": "Grey",
          "value": "Grey"
        },
        {
          "display": "White",
          "value": "White"
        }
      ]
    },
    "description": "What is this person's hair color?",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_hair_color",
    "metadata": {
      "alias": [
        "hairColor"
      ],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Hair Color"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Name the allergy that requires treatment.",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "allergies_allergy",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Allergy"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_expiration_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        20
      ],
      "synonym": [],
      "name": [
        "Driver's License Expiration Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What year was this made?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_year_made",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Year Made"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person.",
    "profile_template": {
      "multi": "true",
      "id": "0154",
      "name": "Personal Information",
      "image_name": "personal-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_details_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Personal Information Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Information"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_purchase_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Purchase Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the manufacturer of this product or thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_brand",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Product/Thing Brand"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the interior color of your vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "interior_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Interior Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's health.",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vitals_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        19
      ],
      "synonym": [],
      "name": [
        "Health Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the estimated value of the vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "car_value",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Vehicle Value"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much did this medication cost?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_price",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Price"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name on the account?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "name_account",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Name on Account"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_expiration_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Passport Expiration Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the minimum GPA requirements for this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_minimum_gpa_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Minimum GPA Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How large is the lot in square feet?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "lot_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        18
      ],
      "synonym": [],
      "name": [
        "Lot Size"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Phone Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this traveler's Known Traveler ID?",
    "profile_template": {
      "multi": "true",
      "id": "0183",
      "name": "Trusted Traveler",
      "image_name": "trusted_traveler.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "known_traveler_id",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Known Traveler ID"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Trusted Traveler"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the passport expire?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_expiration_date",
    "metadata": {
      "alias": [
        "passportExpDate"
      ],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Passport Expiration Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Please list any honors you have received.",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_honors",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Honors"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/kids_clothing_stores"
    },
    "description": "What are your child's favorite clothing stores?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_favorite_stores",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Favorite Stores"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is this person's best friend?",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "childs_best_friend",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Best Friend"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_date_established.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        17
      ],
      "synonym": [],
      "name": [
        "Date Established Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this item.",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_value_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Value Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the Vehicle Title Number?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_vehicle_title_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Vehicle Title Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "Where can you learn more?",
    "profile_template": {
      "multi": "true",
      "id": "0164",
      "name": "Recipes & Instructions",
      "image_name": "instructions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "instructions_reference_link",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Reference Link"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Recipes & Instructions"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the rental period begin?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_start_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Start Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "By your estimate, what is approximately the total value of the insured personal property?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "renters_property_value",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Property Value"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name for this product or thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_name_part",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Male",
          "value": "Male"
        },
        {
          "display": "Female",
          "value": "Female"
        }
      ]
    },
    "description": "What is the pet's sex?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_pet_gender",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Pet Gender"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about how to get to this location.",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "direction_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Directions Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the base price for this item (MSRP)?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_base_price",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Base Price"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your motorcycle's VIN?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_vin",
    "metadata": {
      "alias": [],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "VIN"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many square feet does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_floorplan",
    "metadata": {
      "alias": [],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "Size of Floor plan"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this bank account.",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bank_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        16
      ],
      "synonym": [],
      "name": [
        "Bank Account Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What was the name of the police officer who arrived on the scene?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "officer_on_the_accident",
    "metadata": {
      "alias": [],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "Officer on the Accident"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the rental period end?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_end_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "End Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the first name as it appears on the social security card?",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "first_name_on_social_security_card",
    "metadata": {
      "alias": [
        "ssnFirstName"
      ],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Medicare",
          "value": "Medicare"
        },
        {
          "display": "Medicaid",
          "value": "Medicaid"
        },
        {
          "display": "Champus",
          "value": "Champus"
        },
        {
          "display": "Champva",
          "value": "Champva"
        },
        {
          "display": "Group Health Plan",
          "value": "Group Health Plan"
        },
        {
          "display": "Feca",
          "value": "Feca"
        },
        {
          "display": "Pet",
          "value": "Pet"
        }
      ]
    },
    "description": "What type of health care plan or program is this?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_care_plan",
    "metadata": {
      "alias": [
        "healthInsPlanType"
      ],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "Health Care Plan"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Where is the best place to park near this location?",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_parking",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Parking"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Please enter additional details about this statement.",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Statement Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the total amount awarded from this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_amount_awarded",
    "metadata": {
      "alias": [],
      "forms_reach": [
        15
      ],
      "synonym": [],
      "name": [
        "Amount Awarded"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this medication?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Medication Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How long has this vehicle been insured with the current insurance company?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "length_time_insured",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Length of Time Insured"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the last name as it appears on their driver's license?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_name_on_drivers_license",
    "metadata": {
      "alias": [
        "driversLicLastName"
      ],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Last Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How frequently is this medication taken?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Frequency"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the college location requirements?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_college_location_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "College Location Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe any identifiable features of this location.",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_appearance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        14
      ],
      "synonym": [],
      "name": [
        "Appearance"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the gender requirements?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_gender_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Gender Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the last name as it appears on the social security card?",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_name_on_social_security_card",
    "metadata": {
      "alias": [
        "ssnLastName"
      ],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Last Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "In a few sentences, how would you describe this person?",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "description_of_child",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Description of Person"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this tracker entry.",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Data Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Tell us about your company. Elaborate as much as possible.",
    "profile_template": {
      "multi": "true",
      "id": "0091",
      "name": "Bio",
      "image_name": "biography.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_description",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Company Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bio"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Full coverage",
          "value": "Full coverage"
        },
        {
          "display": "Liability only",
          "value": "Liability only"
        }
      ]
    },
    "description": "What type of insurance is this?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "current_type_insurance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Current Type of Vehicle Insurance"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is number on your insurance claim for this accident?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "claim_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Claim Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the total for all assets?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_total_assets",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Total Assets"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "Provide a reference URL for this note if you would like.",
    "profile_template": {
      "multi": "true",
      "id": "0135",
      "name": "Files Photos & Notes",
      "image_name": "notes_and_files.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "note_note_url",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Note URL"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Files Photos & Notes"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the passport issued?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_issue_date",
    "metadata": {
      "alias": [
        "passportIssueDate"
      ],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Passport Issue Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "XS",
          "value": "XS"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your shirt size?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_men_shirt_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Shirt Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_in_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Move In Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "initial": {
          "mask": "",
          "display_name": "Initial",
          "id": "initial"
        },
        "full": {
          "mask": "",
          "display_name": "Full",
          "id": "full"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "full"
      }
    },
    "description": "What is the middle name as it appears on the birth certificate?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "middle_name_on_birth_certificate",
    "metadata": {
      "alias": [
        "birthCertMiddleName"
      ],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Middle Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_issue_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Loan Issue Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No known allergies",
          "value": "No known allergies"
        },
        {
          "display": "Carbamazepine",
          "value": "Carbamazepine"
        },
        {
          "display": "Codeine",
          "value": "Codeine"
        },
        {
          "display": "Non-steroidal anti-inflammatory drugs (NSAIDs)",
          "value": "Non-steroidal anti-inflammatory drugs (NSAIDs)"
        },
        {
          "display": "Phenytoin",
          "value": "Phenytoin"
        },
        {
          "display": "Penicillin",
          "value": "Penicillin"
        },
        {
          "display": "Sulfa Drugs (Sulfonamides)",
          "value": "Sulfa Drugs (Sulfonamides)"
        },
        {
          "display": "Tetracycline",
          "value": "Tetracycline"
        }
      ]
    },
    "description": "Is this person allergic to any of the following medications?",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "allergies_medication",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [
        "allergy medication",
        "allergy medications",
        "allergy med"
      ],
      "name": [
        "Medication Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/kids_characters"
    },
    "description": "What are your child's favorite characters or television shows?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_favorite_characters",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Favorite Characters"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are you tracking?",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Tracker Type"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What year is this tax information for?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Tax Year"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Animals",
          "value": "Animals"
        },
        {
          "display": "Arts, Culture, Humanities",
          "value": "Arts, Culture, Humanities"
        },
        {
          "display": "Education",
          "value": "Education"
        },
        {
          "display": "Environment",
          "value": "Environment"
        },
        {
          "display": "Health",
          "value": "Health"
        },
        {
          "display": "Human Services",
          "value": "Human Services"
        },
        {
          "display": "International",
          "value": "International"
        },
        {
          "display": "Public Benefit",
          "value": "Public Benefit"
        },
        {
          "display": "Religion",
          "value": "Religion"
        }
      ]
    },
    "description": "What category is this charity associated?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_category",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Charity Category"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the social security card.",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "social_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Social Security Card Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What color is the pet?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Pet Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How many drinks does this person consume per week?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "number_of_drinks_per_week",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Number of Drinks per Week"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/county"
    },
    "description": "What is the county of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_county_of_birth",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "County of Birth"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/clothing_brands"
    },
    "description": "What are your favorite brands?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brands_you_love",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Brands You Love"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Restaurant",
          "value": "Restaurant"
        },
        {
          "display": "Nightlife",
          "value": "Nightlife"
        },
        {
          "display": "Accommodations",
          "value": "Accommodations"
        },
        {
          "display": "Fitness",
          "value": "Fitness"
        },
        {
          "display": "Entertainment/Pastimes",
          "value": "Entertainment/Pastimes"
        },
        {
          "display": "Shopping",
          "value": "Shopping"
        },
        {
          "display": "Wellness/Beauty",
          "value": "Wellness/Beauty"
        },
        {
          "display": "Education/Childcare",
          "value": "Education/Childcare"
        },
        {
          "display": "Transportation",
          "value": "Transportation"
        },
        {
          "display": "Utilities",
          "value": "Utilities"
        },
        {
          "display": "Place of Interest/Attractions",
          "value": "Place of Interest/Attractions"
        },
        {
          "display": "Pet's",
          "value": "Pet's"
        },
        {
          "display": "Home",
          "value": "Home"
        },
        {
          "display": "Office",
          "value": "Office"
        }
      ]
    },
    "description": "Pick a category for this place.",
    "profile_template": {
      "multi": "true",
      "id": "0158",
      "name": "Place",
      "image_name": "place-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "place_detail_place_category",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Place Category"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Place"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How many people (including the driver) can your vehicle hold?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_capacity",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Vehicle Capacity"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this tax return.",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_income_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Tax & Income Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "12:00 AM",
          "value": "12:00 AM"
        },
        {
          "display": "12:30 AM",
          "value": "12:30 AM"
        },
        {
          "display": "1:00 AM",
          "value": "1:00 AM"
        },
        {
          "display": "1:30 AM",
          "value": "1:30 AM"
        },
        {
          "display": "2:00 AM",
          "value": "2:00 AM"
        },
        {
          "display": "2:30 AM",
          "value": "2:30 AM"
        },
        {
          "display": "3:00 AM",
          "value": "3:00 AM"
        },
        {
          "display": "3:30 AM",
          "value": "3:30 AM"
        },
        {
          "display": "4:00 AM",
          "value": "4:00 AM"
        },
        {
          "display": "4:30 AM",
          "value": "4:30 AM"
        },
        {
          "display": "5:00 AM",
          "value": "5:00 AM"
        },
        {
          "display": "5:30 AM",
          "value": "5:30 AM"
        },
        {
          "display": "6:00 AM",
          "value": "6:00 AM"
        },
        {
          "display": "6:30 AM",
          "value": "6:30 AM"
        },
        {
          "display": "7:00 AM",
          "value": "7:00 AM"
        },
        {
          "display": "7:30 AM",
          "value": "7:30 AM"
        },
        {
          "display": "8:00 AM",
          "value": "8:00 AM"
        },
        {
          "display": "8:30 AM",
          "value": "8:30 AM"
        },
        {
          "display": "9:00 AM",
          "value": "9:00 AM"
        },
        {
          "display": "9:30 AM",
          "value": "9:30 AM"
        },
        {
          "display": "10:00 AM",
          "value": "10:00 AM"
        },
        {
          "display": "10:30 AM",
          "value": "10:30 AM"
        },
        {
          "display": "11:00 AM",
          "value": "11:00 AM"
        },
        {
          "display": "11:30 AM",
          "value": "11:30 AM"
        },
        {
          "display": "12:00 PM",
          "value": "12:00 PM"
        },
        {
          "display": "12:30 PM",
          "value": "12:30 PM"
        },
        {
          "display": "1:00 PM",
          "value": "1:00 PM"
        },
        {
          "display": "1:30 PM",
          "value": "1:30 PM"
        },
        {
          "display": "2:00 PM",
          "value": "2:00 PM"
        },
        {
          "display": "2:30 PM",
          "value": "2:30 PM"
        },
        {
          "display": "3:00 PM",
          "value": "3:00 PM"
        },
        {
          "display": "3:30 PM",
          "value": "3:30 PM"
        },
        {
          "display": "4:00 PM",
          "value": "4:00 PM"
        },
        {
          "display": "4:30 PM",
          "value": "4:30 PM"
        },
        {
          "display": "5:00 PM",
          "value": "5:00 PM"
        },
        {
          "display": "5:30 PM",
          "value": "5:30 PM"
        },
        {
          "display": "6:00 PM",
          "value": "6:00 PM"
        },
        {
          "display": "6:30 PM",
          "value": "6:30 PM"
        },
        {
          "display": "7:00 PM",
          "value": "7:00 PM"
        },
        {
          "display": "7:30 PM",
          "value": "7:30 PM"
        },
        {
          "display": "8:00 PM",
          "value": "8:00 PM"
        },
        {
          "display": "8:30 PM",
          "value": "8:30 PM"
        },
        {
          "display": "9:00 PM",
          "value": "9:00 PM"
        },
        {
          "display": "9:30 PM",
          "value": "9:30 PM"
        },
        {
          "display": "10:00 PM",
          "value": "10:00 PM"
        },
        {
          "display": "10:30 PM",
          "value": "10:30 PM"
        },
        {
          "display": "11:00 PM",
          "value": "11:00 PM"
        },
        {
          "display": "11:30 PM",
          "value": "11:30 PM"
        }
      ]
    },
    "description": "What time of day does this activity end?",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "kids_routine_end_time",
    "metadata": {
      "alias": [],
      "forms_reach": [
        12
      ],
      "synonym": [],
      "name": [
        "Activity End Time"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Other",
          "value": "Other"
        },
        {
          "display": "2016",
          "value": "2016"
        },
        {
          "display": "2015",
          "value": "2015"
        },
        {
          "display": "2014",
          "value": "2014"
        },
        {
          "display": "2013",
          "value": "2013"
        },
        {
          "display": "2012",
          "value": "2012"
        },
        {
          "display": "2011",
          "value": "2011"
        },
        {
          "display": "2010",
          "value": "2010"
        },
        {
          "display": "2009",
          "value": "2009"
        },
        {
          "display": "2008",
          "value": "2008"
        },
        {
          "display": "2007",
          "value": "2007"
        },
        {
          "display": "2006",
          "value": "2006"
        },
        {
          "display": "2005",
          "value": "2005"
        },
        {
          "display": "2004",
          "value": "2004"
        },
        {
          "display": "2003",
          "value": "2003"
        },
        {
          "display": "2002",
          "value": "2002"
        },
        {
          "display": "2001",
          "value": "2001"
        },
        {
          "display": "2000",
          "value": "2000"
        },
        {
          "display": "1999",
          "value": "1999"
        },
        {
          "display": "1998",
          "value": "1998"
        },
        {
          "display": "1997",
          "value": "1997"
        },
        {
          "display": "1996",
          "value": "1996"
        },
        {
          "display": "1995",
          "value": "1995"
        },
        {
          "display": "1994",
          "value": "1994"
        },
        {
          "display": "1993",
          "value": "1993"
        },
        {
          "display": "1992",
          "value": "1992"
        },
        {
          "display": "1991",
          "value": "1991"
        },
        {
          "display": "1990",
          "value": "1990"
        },
        {
          "display": "1989",
          "value": "1989"
        },
        {
          "display": "1988",
          "value": "1988"
        },
        {
          "display": "1987",
          "value": "1987"
        },
        {
          "display": "1986",
          "value": "1986"
        },
        {
          "display": "1985",
          "value": "1985"
        },
        {
          "display": "1984",
          "value": "1984"
        },
        {
          "display": "1983",
          "value": "1983"
        },
        {
          "display": "1982",
          "value": "1982"
        },
        {
          "display": "1981",
          "value": "1981"
        },
        {
          "display": "1980",
          "value": "1980"
        },
        {
          "display": "1979",
          "value": "1979"
        },
        {
          "display": "1978",
          "value": "1978"
        },
        {
          "display": "1977",
          "value": "1977"
        },
        {
          "display": "1976",
          "value": "1976"
        },
        {
          "display": "1975",
          "value": "1975"
        },
        {
          "display": "1974",
          "value": "1974"
        },
        {
          "display": "1973",
          "value": "1973"
        },
        {
          "display": "1972",
          "value": "1972"
        },
        {
          "display": "1971",
          "value": "1971"
        },
        {
          "display": "1970",
          "value": "1970"
        },
        {
          "display": "1969",
          "value": "1969"
        },
        {
          "display": "1968",
          "value": "1968"
        },
        {
          "display": "1967",
          "value": "1967"
        },
        {
          "display": "1966",
          "value": "1966"
        },
        {
          "display": "1965",
          "value": "1965"
        },
        {
          "display": "1964",
          "value": "1964"
        },
        {
          "display": "1963",
          "value": "1963"
        },
        {
          "display": "1962",
          "value": "1962"
        },
        {
          "display": "1961",
          "value": "1961"
        },
        {
          "display": "1960",
          "value": "1960"
        },
        {
          "display": "1959",
          "value": "1959"
        },
        {
          "display": "1958",
          "value": "1958"
        },
        {
          "display": "1957",
          "value": "1957"
        },
        {
          "display": "1956",
          "value": "1956"
        },
        {
          "display": "1955",
          "value": "1955"
        },
        {
          "display": "1954",
          "value": "1954"
        },
        {
          "display": "1953",
          "value": "1953"
        },
        {
          "display": "1952",
          "value": "1952"
        },
        {
          "display": "1951",
          "value": "1951"
        },
        {
          "display": "1950",
          "value": "1950"
        },
        {
          "display": "1949",
          "value": "1949"
        },
        {
          "display": "1948",
          "value": "1948"
        },
        {
          "display": "1947",
          "value": "1947"
        },
        {
          "display": "1946",
          "value": "1946"
        },
        {
          "display": "1945",
          "value": "1945"
        },
        {
          "display": "1944",
          "value": "1944"
        },
        {
          "display": "1943",
          "value": "1943"
        },
        {
          "display": "1942",
          "value": "1942"
        },
        {
          "display": "1941",
          "value": "1941"
        },
        {
          "display": "1940",
          "value": "1940"
        },
        {
          "display": "1939",
          "value": "1939"
        },
        {
          "display": "1938",
          "value": "1938"
        },
        {
          "display": "1937",
          "value": "1937"
        },
        {
          "display": "1936",
          "value": "1936"
        },
        {
          "display": "1935",
          "value": "1935"
        },
        {
          "display": "1934",
          "value": "1934"
        },
        {
          "display": "1933",
          "value": "1933"
        },
        {
          "display": "1932",
          "value": "1932"
        },
        {
          "display": "1931",
          "value": "1931"
        },
        {
          "display": "1930",
          "value": "1930"
        },
        {
          "display": "1929",
          "value": "1929"
        },
        {
          "display": "1928",
          "value": "1928"
        },
        {
          "display": "1927",
          "value": "1927"
        },
        {
          "display": "1926",
          "value": "1926"
        },
        {
          "display": "1925",
          "value": "1925"
        },
        {
          "display": "1924",
          "value": "1924"
        },
        {
          "display": "1923",
          "value": "1923"
        },
        {
          "display": "1922",
          "value": "1922"
        },
        {
          "display": "1921",
          "value": "1921"
        },
        {
          "display": "1920",
          "value": "1920"
        },
        {
          "display": "1919",
          "value": "1919"
        },
        {
          "display": "1918",
          "value": "1918"
        },
        {
          "display": "1917",
          "value": "1917"
        },
        {
          "display": "1916",
          "value": "1916"
        },
        {
          "display": "1915",
          "value": "1915"
        },
        {
          "display": "1914",
          "value": "1914"
        },
        {
          "display": "1913",
          "value": "1913"
        },
        {
          "display": "1912",
          "value": "1912"
        },
        {
          "display": "1911",
          "value": "1911"
        },
        {
          "display": "1910",
          "value": "1910"
        },
        {
          "display": "1909",
          "value": "1909"
        },
        {
          "display": "1908",
          "value": "1908"
        },
        {
          "display": "1907",
          "value": "1907"
        },
        {
          "display": "1906",
          "value": "1906"
        },
        {
          "display": "1905",
          "value": "1905"
        },
        {
          "display": "1904",
          "value": "1904"
        },
        {
          "display": "1903",
          "value": "1903"
        },
        {
          "display": "1902",
          "value": "1902"
        },
        {
          "display": "1901",
          "value": "1901"
        }
      ]
    },
    "description": "What year is your motorcycle?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        13
      ],
      "synonym": [],
      "name": [
        "Motorcycle Year"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total amount from savings assets?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "saving_assets",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Saving Assets"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Army",
          "value": "Army"
        },
        {
          "display": "Marine Corps",
          "value": "Marine Corps"
        },
        {
          "display": "Navy",
          "value": "Navy"
        },
        {
          "display": "Air Force",
          "value": "Air Force"
        },
        {
          "display": "Coast Guard",
          "value": "Coast Guard"
        }
      ]
    },
    "description": "What military service/agency is this person a part of?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "dadcac_service_agency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Service/Agency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "In-ground",
          "value": "In-ground"
        },
        {
          "display": "In-ground fenced",
          "value": "In-ground fenced"
        },
        {
          "display": "Above Ground",
          "value": "Above Ground"
        }
      ]
    },
    "description": "Does this home have a swimming pool?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "swimming_pool",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Swimming Pool"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is the easiest way to take public transportation to this location?",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_public_transit_directions_to_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Public Transit Directions to Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the SKU, UPC, ASIN, or identifier for this product or thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_identifier",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Product/Thing Identifier"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What color is this product or thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Product/Thing Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your vehicle.",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "my_car_car_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this driver's license.",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "drivers_licence_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Driver's License Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this company.",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_company_detail_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Company Detail Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Provide any other information about your conditions you would like to share.",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "additional_conditions_info",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Additional Conditions Info"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_in_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Move In Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "10 years",
          "value": "10 years"
        },
        {
          "display": "20 years",
          "value": "20 years"
        },
        {
          "display": "30 years",
          "value": "30 years"
        },
        {
          "display": "Don't have term life insurance",
          "value": "Don't have term life insurance"
        }
      ]
    },
    "description": "How long is the term of the insurance?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_term_length",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Life Insurance Term"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What activity takes place at this time?",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "kids_routine_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        10
      ],
      "synonym": [],
      "name": [
        "Activity Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the annunal revenue for this year?",
    "profile_template": {
      "multi": "true",
      "id": "0161",
      "name": "Revenue & Income",
      "image_name": "revenue_income.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_revenue_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Revenue Amount"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Revenue & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this place.",
    "profile_template": {
      "multi": "true",
      "id": "0158",
      "name": "Place",
      "image_name": "place-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "place_detail_place_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Place Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Place"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this policy.",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Policy Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Cruiser",
          "value": "Cruiser"
        },
        {
          "display": "Dirt Bike",
          "value": "Dirt Bike"
        },
        {
          "display": "Dual Purpose",
          "value": "Dual Purpose"
        },
        {
          "display": "Sport",
          "value": "Sport"
        },
        {
          "display": "Sport Touring",
          "value": "Sport Touring"
        },
        {
          "display": "Touring",
          "value": "Touring"
        },
        {
          "display": "Traditional",
          "value": "Traditional"
        }
      ]
    },
    "description": "What type of motorcycle is this?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_phone_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Phone Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_in_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Move In Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What can you find here?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "intranet_contents",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Intranet Contents"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_expiration_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Insurance Expiration Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "3+",
          "value": "3+"
        }
      ]
    },
    "description": "How many cars does your garage hold?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_garage_car_capacity",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Garage Car Capacity"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_issue_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        9
      ],
      "synonym": [],
      "name": [
        "Driver's License Issue Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "On what date was this company established?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_date_established",
    "metadata": {
      "alias": [],
      "forms_reach": [
        11
      ],
      "synonym": [],
      "name": [
        "Date Established"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the website for the card?",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_website",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the URL for this establishment's website?",
    "profile_template": {
      "multi": "true",
      "id": "0158",
      "name": "Place",
      "image_name": "place-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "place_detail_website",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Place"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If so, what kinds of drugs?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "types_of_drugs_used",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Types of Drugs Used"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional information about your hopes for retirement.",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Retirement Preference Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who are you renting this item from?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_rental_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Rental Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this policy include road service coverage?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "road_service_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Road Service Coverage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Slim (B)",
          "value": "Slim (B)"
        },
        {
          "display": "Narrow (C)",
          "value": "Narrow (C)"
        },
        {
          "display": "Medium/Standard (D)",
          "value": "Medium/Standard (D)"
        },
        {
          "display": "Wide (E)",
          "value": "Wide (E)"
        },
        {
          "display": "X-Wide (EE)",
          "value": "X-Wide (EE)"
        },
        {
          "display": "X-Wide (EEE)",
          "value": "X-Wide (EEE)"
        }
      ]
    },
    "description": "What width of shoe do you wear?",
    "profile_template": {
      "multi": "true",
      "id": "0165",
      "name": "Shoe Size",
      "image_name": "womensshoes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shoe_pref_shoe_width",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Shoe Width"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Shoe Size"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Army",
          "value": "Army"
        },
        {
          "display": "Marine Corps",
          "value": "Marine Corps"
        },
        {
          "display": "Navy",
          "value": "Navy"
        },
        {
          "display": "Air Force",
          "value": "Air Force"
        },
        {
          "display": "Coast Guard",
          "value": "Coast Guard"
        }
      ]
    },
    "description": "What military service/agency is this person a part of?",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_service_agency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Service/Agency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the model for this product/thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_model",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Product/Thing Model"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If prescription only, what is the prescription number for this medication?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_prescription_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Prescription Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes that you want others to know about this pet.",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Pet Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your vehicle's fuel type?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_fuel_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Fuel Type"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is the easiest way to drive to this location?",
    "profile_template": {
      "multi": "true",
      "id": "0136",
      "name": "Directions",
      "image_name": "directions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "directions_driving_directions_to_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Driving Directions to Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Directions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much is the collision deductible?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "deductible_car",
    "metadata": {
      "alias": [
        "carDeductible"
      ],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Deductible"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total child support received?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "child_support_received",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Child Support Received"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_date_established.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Date Established Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the contact phone number for the health insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Contact Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total amount from checking assets?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "checking_assets",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Checking Assets"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much does the annual insurance premium cost?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "annual_premium",
    "metadata": {
      "alias": [
        "carAnnualPremium"
      ],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Annual Premium"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this account set up to auto-pay?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "auto_pay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Auto-Pay"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Provide any other information about your symptoms you would like to share.",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "additional_symptom_info",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Additional Symptom Info"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to start your own business?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_business_creation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        8
      ],
      "synonym": [],
      "name": [
        "Business Creation"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the stock market ticker for this company?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_stock_marker_ticker",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Stock Market Ticker"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Scholarship Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the power for the right eye? (also called \"Strength\" or \"Sphere\")",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye_power",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Right Eye Power"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Do the renters have any specific responsibilities?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renatl_responsibilities",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Responsibilities"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this property attached to another home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "property_type_attached",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Property Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the details of this property.",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basics_property_details_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Property Details Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the current insurance policy expire?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_expiration",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Policy Expiration"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's pay grade?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "dadcac_pay_grade",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Pay Grade"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the power for the left eye? (also called \"Strength\" or \"Sphere\")",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "left_eye_power",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Left Eye Power"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_insurance_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Insurance Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does this policy expire?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_expiration_date",
    "metadata": {
      "alias": [
        "carInsuranceExpiration"
      ],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Insurance Expiration Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any special instructions necessary for opening this lock.",
    "profile_template": {
      "multi": "true",
      "id": "0117",
      "name": "Combination Locks",
      "image_name": "locks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "instructions_for_opening",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Instructions for Opening"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Combination Locks"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0036",
      "name": "Passwords",
      "image_name": "myaccountlogins.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_logins_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passwords"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the annual premium for the flood insurance policy?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "flood_insurance_policy_premium",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Flood Insurance Annual Premium"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "equifax_customer_service.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Equifax Customer Service Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the dosage of this medication?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_dosage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Dosage"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Macy's",
          "value": "Macy's"
        },
        {
          "display": "Nordstrom",
          "value": "Nordstrom"
        },
        {
          "display": "Lord & Taylor",
          "value": "Lord & Taylor"
        },
        {
          "display": "Saks Fifth Ave",
          "value": "Saks Fifth Ave"
        },
        {
          "display": "Nieman Marcus",
          "value": "Nieman Marcus"
        },
        {
          "display": "Boscov's",
          "value": "Boscov's"
        },
        {
          "display": "Sears",
          "value": "Sears"
        },
        {
          "display": "JC Penney",
          "value": "JC Penney"
        },
        {
          "display": "Dillard's",
          "value": "Dillard's"
        },
        {
          "display": "Barney's New York",
          "value": "Barney's New York"
        },
        {
          "display": "Belk",
          "value": "Belk"
        },
        {
          "display": "Von Maur",
          "value": "Von Maur"
        },
        {
          "display": "Bloomingdales",
          "value": "Bloomingdales"
        }
      ]
    },
    "description": "What is your favorite department store",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "favorite_department_stores",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Favorite Department Stores"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the title issued?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_date_issued",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Date Issued"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the rental contract number?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_contract_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Contract Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "How would you describe your style?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "clothing_style_in_your_words",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Clothing Style, In Your Words"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for support for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number_for_account",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Contact Number for Account"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's blood pressure?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "blood_pressure",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Blood Pressure"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "HMO",
          "value": "HMO"
        },
        {
          "display": "PPO",
          "value": "PPO"
        },
        {
          "display": "POS",
          "value": "POS"
        },
        {
          "display": "EPO",
          "value": "EPO"
        },
        {
          "display": "Flexible Spending Account (FSA)",
          "value": "Flexible Spending Account (FSA)"
        },
        {
          "display": "Health Reimbursement Account (HRA)",
          "value": "Health Reimbursement Account (HRA)"
        },
        {
          "display": "Health Savings Account (HSA)",
          "value": "Health Savings Account (HSA)"
        },
        {
          "display": "Prescription Plan",
          "value": "Prescription Plan"
        },
        {
          "display": "Self-Directed Plan",
          "value": "Self-Directed Plan"
        },
        {
          "display": "High Deductible Plan",
          "value": "High Deductible Plan"
        }
      ]
    },
    "description": "What type of health insurance coverage is this?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "coverage_type",
    "metadata": {
      "alias": [
        "heathInsCoverageType"
      ],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Coverage Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Apple",
          "value": "Apple"
        },
        {
          "display": "Apricot",
          "value": "Apricot"
        },
        {
          "display": "Avocado",
          "value": "Avocado"
        },
        {
          "display": "Banana",
          "value": "Banana"
        },
        {
          "display": "Blackberry",
          "value": "Blackberry"
        },
        {
          "display": "Blueberry",
          "value": "Blueberry"
        },
        {
          "display": "Cherry",
          "value": "Cherry"
        },
        {
          "display": "Clementine",
          "value": "Clementine"
        },
        {
          "display": "Coconut",
          "value": "Coconut"
        },
        {
          "display": "Cranberry",
          "value": "Cranberry"
        },
        {
          "display": "Fig",
          "value": "Fig"
        },
        {
          "display": "Grape",
          "value": "Grape"
        },
        {
          "display": "Grapefruit",
          "value": "Grapefruit"
        },
        {
          "display": "Guava",
          "value": "Guava"
        },
        {
          "display": "Kiwi",
          "value": "Kiwi"
        },
        {
          "display": "Lemon",
          "value": "Lemon"
        },
        {
          "display": "Lime",
          "value": "Lime"
        },
        {
          "display": "Mandarin",
          "value": "Mandarin"
        },
        {
          "display": "Mango",
          "value": "Mango"
        },
        {
          "display": "Honeydew Melon",
          "value": "Honeydew Melon"
        },
        {
          "display": "Cantaloupe Melon",
          "value": "Cantaloupe Melon"
        },
        {
          "display": "Watermelon",
          "value": "Watermelon"
        },
        {
          "display": "Nectarine",
          "value": "Nectarine"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Papaya",
          "value": "Papaya"
        },
        {
          "display": "Peach",
          "value": "Peach"
        },
        {
          "display": "Pear",
          "value": "Pear"
        },
        {
          "display": "Pineapple",
          "value": "Pineapple"
        },
        {
          "display": "Plum",
          "value": "Plum"
        },
        {
          "display": "Pomegranate",
          "value": "Pomegranate"
        },
        {
          "display": "Strawberry",
          "value": "Strawberry"
        },
        {
          "display": "Tomato",
          "value": "Tomato"
        },
        {
          "display": "Don't care for fruit",
          "value": "Don't care for fruit"
        }
      ]
    },
    "description": "Are there fruits you dislike?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_fruits_you_dislike",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Fruits You Dislike"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where did the accident take place?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_location",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Accident Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "If former tobacco user, when did this person quit?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "stop_tobacco_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "When Stopped Tobacco Use"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person consume alcohol?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "alcohol_consumption",
    "metadata": {
      "alias": [],
      "forms_reach": [
        7
      ],
      "synonym": [],
      "name": [
        "Alcohol Consumption"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the web address for online account management?",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_website",
    "metadata": {
      "alias": [
        "membershipRewardsWebsite"
      ],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many stories is this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "stories",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Stories"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Where is your router located?",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_router_location",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Router Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "1 month",
          "value": "1 month"
        },
        {
          "display": "3 months",
          "value": "3 months"
        },
        {
          "display": "6 months",
          "value": "6 months"
        },
        {
          "display": "1 year",
          "value": "1 year"
        },
        {
          "display": "2 years",
          "value": "2 years"
        },
        {
          "display": "3 years",
          "value": "3 years"
        },
        {
          "display": "5 years",
          "value": "5 years"
        },
        {
          "display": "7 years",
          "value": "7 years"
        },
        {
          "display": "10 years",
          "value": "10 years"
        },
        {
          "display": "Lifetime",
          "value": "Lifetime"
        }
      ]
    },
    "description": "What is the length of the warranty period?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_period",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Warranty Period"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the measurement for the right eye cylinder?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye_cylinder",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Right Eye Cylinder"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the glasses prescription for the right eye?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Right Eye"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this policy have rental car expense coverage when the car is in the shop?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_car_expense_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Rental Car Expense Coverage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_date_of_birth.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Pet Date of Birth Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_issue_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Passport Issue Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Assigned Spaces",
          "value": "Assigned Spaces"
        },
        {
          "display": "Garage",
          "value": "Garage"
        },
        {
          "display": "Street",
          "value": "Street"
        }
      ]
    },
    "description": "What type of parking is available for this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parking_availability",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Parking Availability"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any information you wish to store as part of this note.",
    "profile_template": {
      "multi": "true",
      "id": "0175",
      "name": "Encrypted Notes & Files",
      "image_name": "notes_and_files_secure.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "secure_note_note",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Note"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Encrypted Notes & Files"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Class A (Commercial)",
          "value": "Class A (Commercial)"
        },
        {
          "display": "Class B (Commercial)",
          "value": "Class B (Commercial)"
        },
        {
          "display": "Class C (Commercial)",
          "value": "Class C (Commercial)"
        },
        {
          "display": "Class D",
          "value": "Class D"
        },
        {
          "display": "Class E (Taxi/Livery)",
          "value": "Class E (Taxi/Livery)"
        },
        {
          "display": "Class M (Motorcycle)",
          "value": "Class M (Motorcycle)"
        }
      ]
    },
    "description": "Does this driver's license apply to any other types of vehicles (Class D is a standard driver's license)?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_classes_licensed_operate",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Classes"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the move out date?",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_out_date",
    "metadata": {
      "alias": [
        "moveOutDate"
      ],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Move Out Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the loan issued?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_issue_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Loan Issue Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the measurement for the left eye cylinder?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "left_eye_cylinder",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Left Eye Cylinder"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the glasses prescription for the left eye?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "left_eye",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Left Eye"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Button",
          "value": "Button"
        },
        {
          "display": "Zipper",
          "value": "Zipper"
        },
        {
          "display": "Depends on the jean",
          "value": "Depends on the jean"
        }
      ]
    },
    "description": "Do you prefer button or zip fly pants?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_button_or_zip",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Jeans Closure"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No known allergies",
          "value": "No known allergies"
        },
        {
          "display": "Aspirin",
          "value": "Aspirin"
        },
        {
          "display": "Cosmetics",
          "value": "Cosmetics"
        },
        {
          "display": "Dust",
          "value": "Dust"
        },
        {
          "display": "Dust Mite",
          "value": "Dust Mite"
        },
        {
          "display": "Formaldehyde",
          "value": "Formaldehyde"
        },
        {
          "display": "Latex",
          "value": "Latex"
        },
        {
          "display": "Medications",
          "value": "Medications"
        },
        {
          "display": "Mold",
          "value": "Mold"
        }
      ]
    },
    "description": "Is this person allergic to any of the following household items?",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "household_indoor_allergies",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Household/Indoor Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0002",
      "name": "Instant Messaging",
      "image_name": "instant_messaging.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "instant_messaging_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Instant Messaging"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are your favorite foods?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_favorite_food",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Favorite Food"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Brick",
          "value": "Brick"
        },
        {
          "display": "Frame",
          "value": "Frame"
        },
        {
          "display": "Vinyl Siding",
          "value": "Vinyl Siding"
        }
      ]
    },
    "description": "What type of exterior siding does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_exterior_siding",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Exterior Siding"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person use recreational drugs?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_basic_drug_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Drug Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Every day",
          "value": "Every day"
        },
        {
          "display": "Several times a week",
          "value": "Several times a week"
        },
        {
          "display": "A few times a week",
          "value": "A few times a week"
        },
        {
          "display": "A few times a month",
          "value": "A few times a month"
        },
        {
          "display": "Rarely",
          "value": "Rarely"
        },
        {
          "display": "Never",
          "value": "Never"
        }
      ]
    },
    "description": "How often does this person exercise?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "exercise_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Exercise Frequency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person have disccharge from their nipples?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "discharge_from_nipples",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Discharge from Nipples"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much did this surgery cost?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_cost",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Cost"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/clothing_brands"
    },
    "description": "What are your favorite brands?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_brands_you_love",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Brands You Love"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was this surgery performed?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What winery, company or brand produces this?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_brand",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Brand"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the area of study requirements?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_area_of_study_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Area of Study Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "No restrictions",
          "value": "No restrictions"
        },
        {
          "display": "Gluten free",
          "value": "Gluten free"
        },
        {
          "display": "Lactose free",
          "value": "Lactose free"
        },
        {
          "display": "Sulfite free",
          "value": "Sulfite free"
        },
        {
          "display": "Nut free",
          "value": "Nut free"
        },
        {
          "display": "Sodium free",
          "value": "Sodium free"
        },
        {
          "display": "Yeast free",
          "value": "Yeast free"
        },
        {
          "display": "Cholesterol free",
          "value": "Cholesterol free"
        },
        {
          "display": "Sugar free",
          "value": "Sugar free"
        },
        {
          "display": "Pesticide free",
          "value": "Pesticide free"
        },
        {
          "display": "Non-dairy",
          "value": "Non-dairy"
        }
      ]
    },
    "description": "Which, if any, of the following dietary restrictions do you have?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_dietary_restrictions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Dietary Restrictions"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the alcohol content?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_alcohol_content",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Alcohol Content"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What year was this product or thing manufactured?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Year Manufactured"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the website address (URL) for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_website_address",
    "metadata": {
      "alias": [
        "ccWebsite"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Website Address"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the Transaction Identification Number?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_vehicle_emissions_test_transaction_identification_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Vehicle Emissions Test Transaction Identification Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address for your car/motorcycle insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_motorcycle_insurance_company_website",
    "metadata": {
      "alias": [
        "carInsuranceUrl"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Vehicle Insurance Company Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What scores did you receive for each section of the test or assesment?",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "test_subscores",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Test Subscores"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "12:00 AM",
          "value": "12:00 AM"
        },
        {
          "display": "12:30 AM",
          "value": "12:30 AM"
        },
        {
          "display": "1:00 AM",
          "value": "1:00 AM"
        },
        {
          "display": "1:30 AM",
          "value": "1:30 AM"
        },
        {
          "display": "2:00 AM",
          "value": "2:00 AM"
        },
        {
          "display": "2:30 AM",
          "value": "2:30 AM"
        },
        {
          "display": "3:00 AM",
          "value": "3:00 AM"
        },
        {
          "display": "3:30 AM",
          "value": "3:30 AM"
        },
        {
          "display": "4:00 AM",
          "value": "4:00 AM"
        },
        {
          "display": "4:30 AM",
          "value": "4:30 AM"
        },
        {
          "display": "5:00 AM",
          "value": "5:00 AM"
        },
        {
          "display": "5:30 AM",
          "value": "5:30 AM"
        },
        {
          "display": "6:00 AM",
          "value": "6:00 AM"
        },
        {
          "display": "6:30 AM",
          "value": "6:30 AM"
        },
        {
          "display": "7:00 AM",
          "value": "7:00 AM"
        },
        {
          "display": "7:30 AM",
          "value": "7:30 AM"
        },
        {
          "display": "8:00 AM",
          "value": "8:00 AM"
        },
        {
          "display": "8:30 AM",
          "value": "8:30 AM"
        },
        {
          "display": "9:00 AM",
          "value": "9:00 AM"
        },
        {
          "display": "9:30 AM",
          "value": "9:30 AM"
        },
        {
          "display": "10:00 AM",
          "value": "10:00 AM"
        },
        {
          "display": "10:30 AM",
          "value": "10:30 AM"
        },
        {
          "display": "11:00 AM",
          "value": "11:00 AM"
        },
        {
          "display": "11:30 AM",
          "value": "11:30 AM"
        },
        {
          "display": "12:00 PM",
          "value": "12:00 PM"
        },
        {
          "display": "12:30 PM",
          "value": "12:30 PM"
        },
        {
          "display": "1:00 PM",
          "value": "1:00 PM"
        },
        {
          "display": "1:30 PM",
          "value": "1:30 PM"
        },
        {
          "display": "2:00 PM",
          "value": "2:00 PM"
        },
        {
          "display": "2:30 PM",
          "value": "2:30 PM"
        },
        {
          "display": "3:00 PM",
          "value": "3:00 PM"
        },
        {
          "display": "3:30 PM",
          "value": "3:30 PM"
        },
        {
          "display": "4:00 PM",
          "value": "4:00 PM"
        },
        {
          "display": "4:30 PM",
          "value": "4:30 PM"
        },
        {
          "display": "5:00 PM",
          "value": "5:00 PM"
        },
        {
          "display": "5:30 PM",
          "value": "5:30 PM"
        },
        {
          "display": "6:00 PM",
          "value": "6:00 PM"
        },
        {
          "display": "6:30 PM",
          "value": "6:30 PM"
        },
        {
          "display": "7:00 PM",
          "value": "7:00 PM"
        },
        {
          "display": "7:30 PM",
          "value": "7:30 PM"
        },
        {
          "display": "8:00 PM",
          "value": "8:00 PM"
        },
        {
          "display": "8:30 PM",
          "value": "8:30 PM"
        },
        {
          "display": "9:00 PM",
          "value": "9:00 PM"
        },
        {
          "display": "9:30 PM",
          "value": "9:30 PM"
        },
        {
          "display": "10:00 PM",
          "value": "10:00 PM"
        },
        {
          "display": "10:30 PM",
          "value": "10:30 PM"
        },
        {
          "display": "11:00 PM",
          "value": "11:00 PM"
        },
        {
          "display": "11:30 PM",
          "value": "11:30 PM"
        }
      ]
    },
    "description": "What time of day does this activity start?",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "kids_routine_time",
    "metadata": {
      "alias": [],
      "forms_reach": [
        6
      ],
      "synonym": [],
      "name": [
        "Activity Start Time"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did this insurance coverage begin?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_start_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Start Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your shoe size.",
    "profile_template": {
      "multi": "true",
      "id": "0165",
      "name": "Shoe Size",
      "image_name": "womensshoes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shoe_preference_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Shoe Size Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Shoe Size"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Trendy",
          "value": "Trendy"
        },
        {
          "display": "Stylish",
          "value": "Stylish"
        },
        {
          "display": "Girly Girl",
          "value": "Girly Girl"
        },
        {
          "display": "Frilly",
          "value": "Frilly"
        },
        {
          "display": "Hippy Chic",
          "value": "Hippy Chic"
        },
        {
          "display": "Athletic",
          "value": "Athletic"
        },
        {
          "display": "Casual",
          "value": "Casual"
        },
        {
          "display": "Preppy",
          "value": "Preppy"
        },
        {
          "display": "Classic",
          "value": "Classic"
        },
        {
          "display": "Funky",
          "value": "Funky"
        }
      ]
    },
    "description": "What style clothing do you typically buy for your child?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_style_preference",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Style preference"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "When is the rent due each month?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rent_payment_due",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Rent Payment Due"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any special instructions about accessing this server.",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "server_access_instructions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Server Access Instructions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who should the rent check be made out to?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "landlords_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Rent Payment To"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_expiration.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Policy Expiration Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "16 Personality Factors",
          "value": "16 Personality Factors"
        },
        {
          "display": "ACT",
          "value": "ACT"
        },
        {
          "display": "AHPAT",
          "value": "AHPAT"
        },
        {
          "display": "ASVAB",
          "value": "ASVAB"
        },
        {
          "display": "Beck Depression Inventory",
          "value": "Beck Depression Inventory"
        },
        {
          "display": "California Basic Educational Skills Test",
          "value": "California Basic Educational Skills Test"
        },
        {
          "display": "COMPLEX-USA",
          "value": "COMPLEX-USA"
        },
        {
          "display": "DAT",
          "value": "DAT"
        },
        {
          "display": "EPPP",
          "value": "EPPP"
        },
        {
          "display": "FE",
          "value": "FE"
        },
        {
          "display": "GMAT",
          "value": "GMAT"
        },
        {
          "display": "GRE",
          "value": "GRE"
        },
        {
          "display": "HSPT",
          "value": "HSPT"
        },
        {
          "display": "IELTS",
          "value": "IELTS"
        },
        {
          "display": "ISEE",
          "value": "ISEE"
        },
        {
          "display": "iTEP",
          "value": "iTEP"
        },
        {
          "display": "LSAT",
          "value": "LSAT"
        },
        {
          "display": "MAT",
          "value": "MAT"
        },
        {
          "display": "MBE",
          "value": "MBE"
        },
        {
          "display": "MCAT",
          "value": "MCAT"
        },
        {
          "display": "Million Clinical Multiaxial Inventory",
          "value": "Million Clinical Multiaxial Inventory"
        },
        {
          "display": "Minnesota Multiphasic",
          "value": "Minnesota Multiphasic"
        },
        {
          "display": "Personality Inventory",
          "value": "Personality Inventory"
        },
        {
          "display": "MPJE",
          "value": "MPJE"
        },
        {
          "display": "MPRE",
          "value": "MPRE"
        },
        {
          "display": "Myers-Briggs",
          "value": "Myers-Briggs"
        },
        {
          "display": "NAPLEX",
          "value": "NAPLEX"
        },
        {
          "display": "NCLEX-PN",
          "value": "NCLEX-PN"
        },
        {
          "display": "NCLEX-RN",
          "value": "NCLEX-RN"
        },
        {
          "display": "OAT",
          "value": "OAT"
        },
        {
          "display": "PA",
          "value": "PA"
        },
        {
          "display": "PCAT",
          "value": "PCAT"
        },
        {
          "display": "Personality Assessment Inventory",
          "value": "Personality Assessment Inventory"
        },
        {
          "display": "PRAXIS",
          "value": "PRAXIS"
        },
        {
          "display": "Principles and Practice of Engineering Exam",
          "value": "Principles and Practice of Engineering Exam"
        },
        {
          "display": "Revised NEO Personality Inventory",
          "value": "Revised NEO Personality Inventory"
        },
        {
          "display": "SAT",
          "value": "SAT"
        },
        {
          "display": "SSAT",
          "value": "SSAT"
        },
        {
          "display": "Thematic Apperception",
          "value": "Thematic Apperception"
        },
        {
          "display": "Test",
          "value": "Test"
        },
        {
          "display": "TOEFL",
          "value": "TOEFL"
        },
        {
          "display": "TOEIC",
          "value": "TOEIC"
        },
        {
          "display": "TSE",
          "value": "TSE"
        },
        {
          "display": "TWE",
          "value": "TWE"
        },
        {
          "display": "Uniform Certified Public Accountant Exam",
          "value": "Uniform Certified Public Accountant Exam"
        },
        {
          "display": "Uniform Combined State Law Exam",
          "value": "Uniform Combined State Law Exam"
        },
        {
          "display": "Uniform Securities Agent State Law Exam",
          "value": "Uniform Securities Agent State Law Exam"
        },
        {
          "display": "United States Medical Licensing Exam",
          "value": "United States Medical Licensing Exam"
        },
        {
          "display": "USPTO",
          "value": "USPTO"
        },
        {
          "display": "VCAT",
          "value": "VCAT"
        },
        {
          "display": "WTMA",
          "value": "WTMA"
        }
      ]
    },
    "description": "What is the name of the test or assessment taken?",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "testscore_test_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Test Name"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Asphalt Shingles",
          "value": "Asphalt Shingles"
        },
        {
          "display": "Metal",
          "value": "Metal"
        },
        {
          "display": "Slate",
          "value": "Slate"
        },
        {
          "display": "Wood Shingles",
          "value": "Wood Shingles"
        },
        {
          "display": "Tile",
          "value": "Tile"
        }
      ]
    },
    "description": "What material is your roof made of?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_roofing_material",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Roofing Material"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your motorcycle.",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_basic_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Still Water",
          "value": "Still Water"
        },
        {
          "display": "Sparking Water",
          "value": "Sparking Water"
        },
        {
          "display": "Juice",
          "value": "Juice"
        },
        {
          "display": "Iced Tea",
          "value": "Iced Tea"
        },
        {
          "display": "Soda",
          "value": "Soda"
        },
        {
          "display": "Diet Soda",
          "value": "Diet Soda"
        }
      ]
    },
    "description": "What is this person's preferred non-alcoholic beverage?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "non_alcoholic_drinks",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Non-Alcoholic Drinks"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Apple",
          "value": "Apple"
        },
        {
          "display": "Apricot",
          "value": "Apricot"
        },
        {
          "display": "Avocado",
          "value": "Avocado"
        },
        {
          "display": "Banana",
          "value": "Banana"
        },
        {
          "display": "Blackberry",
          "value": "Blackberry"
        },
        {
          "display": "Blueberry",
          "value": "Blueberry"
        },
        {
          "display": "Cherry",
          "value": "Cherry"
        },
        {
          "display": "Clementine",
          "value": "Clementine"
        },
        {
          "display": "Coconut",
          "value": "Coconut"
        },
        {
          "display": "Cranberry",
          "value": "Cranberry"
        },
        {
          "display": "Fig",
          "value": "Fig"
        },
        {
          "display": "Grape",
          "value": "Grape"
        },
        {
          "display": "Grapefruit",
          "value": "Grapefruit"
        },
        {
          "display": "Guava",
          "value": "Guava"
        },
        {
          "display": "Kiwi",
          "value": "Kiwi"
        },
        {
          "display": "Lemon",
          "value": "Lemon"
        },
        {
          "display": "Lime",
          "value": "Lime"
        },
        {
          "display": "Mandarin",
          "value": "Mandarin"
        },
        {
          "display": "Mango",
          "value": "Mango"
        },
        {
          "display": "Honeydew Melon",
          "value": "Honeydew Melon"
        },
        {
          "display": "Cantaloupe Melon",
          "value": "Cantaloupe Melon"
        },
        {
          "display": "Watermelon",
          "value": "Watermelon"
        },
        {
          "display": "Nectarine",
          "value": "Nectarine"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Papaya",
          "value": "Papaya"
        },
        {
          "display": "Peach",
          "value": "Peach"
        },
        {
          "display": "Pear",
          "value": "Pear"
        },
        {
          "display": "Pineapple",
          "value": "Pineapple"
        },
        {
          "display": "Plum",
          "value": "Plum"
        },
        {
          "display": "Pomegranate",
          "value": "Pomegranate"
        },
        {
          "display": "Strawberry",
          "value": "Strawberry"
        },
        {
          "display": "Tomato",
          "value": "Tomato"
        },
        {
          "display": "Don't care for fruit",
          "value": "Don't care for fruit"
        }
      ]
    },
    "description": "Which of the following fruits do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_preferred_fruits",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Preferred Fruits"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_expiration_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Passport Expiration Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the lot number?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "lot_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Lot Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about how you use your name in different settings.",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "my_name_notes",
    "metadata": {
      "alias": [
        "nameNotes"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Name Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the property damage liability coverage?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "liability_protection_property_damage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Liability Protection - Property Damage"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "For how many years did / has this person used tobacco?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "length_of_tobacco_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Length of Tobacco Use"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Breast Lumps",
          "value": "Breast Lumps"
        },
        {
          "display": "Chills or Night Sweats",
          "value": "Chills or Night Sweats"
        },
        {
          "display": "Concussion or Head Injury",
          "value": "Concussion or Head Injury"
        },
        {
          "display": "Dizziness or Fainting",
          "value": "Dizziness or Fainting"
        },
        {
          "display": "Excessive Stress",
          "value": "Excessive Stress"
        },
        {
          "display": "Fatigue",
          "value": "Fatigue"
        },
        {
          "display": "Fever",
          "value": "Fever"
        },
        {
          "display": "Forgetfulness",
          "value": "Forgetfulness"
        },
        {
          "display": "Frequent Falls",
          "value": "Frequent Falls"
        },
        {
          "display": "Headache",
          "value": "Headache"
        },
        {
          "display": "Migraine Headaches",
          "value": "Migraine Headaches"
        },
        {
          "display": "Nervousness",
          "value": "Nervousness"
        },
        {
          "display": "Numbness",
          "value": "Numbness"
        },
        {
          "display": "Sexual Problmes / Concerns",
          "value": "Sexual Problmes / Concerns"
        },
        {
          "display": "Sleep Difficulties",
          "value": "Sleep Difficulties"
        },
        {
          "display": "Unexpected Weight Gain",
          "value": "Unexpected Weight Gain"
        },
        {
          "display": "Unexpected Weight Loss",
          "value": "Unexpected Weight Loss"
        },
        {
          "display": "Vomiting",
          "value": "Vomiting"
        },
        {
          "display": "Ankles swelling",
          "value": "Ankles swelling"
        },
        {
          "display": "Chest Pain",
          "value": "Chest Pain"
        },
        {
          "display": "Palpitations (fast or irregular heartbeat)",
          "value": "Palpitations (fast or irregular heartbeat)"
        },
        {
          "display": "Shortness of Breath",
          "value": "Shortness of Breath"
        },
        {
          "display": "Chronic Cough",
          "value": "Chronic Cough"
        },
        {
          "display": "Difficulty Swallowing",
          "value": "Difficulty Swallowing"
        },
        {
          "display": "Frequent / Severe Nose Bleeds",
          "value": "Frequent / Severe Nose Bleeds"
        },
        {
          "display": "Frequent / Severe Sore Throat",
          "value": "Frequent / Severe Sore Throat"
        },
        {
          "display": "Frequent Colds / Sinus Problems",
          "value": "Frequent Colds / Sinus Problems"
        },
        {
          "display": "Frequent Earaches",
          "value": "Frequent Earaches"
        },
        {
          "display": "Gums Bleed Easily",
          "value": "Gums Bleed Easily"
        },
        {
          "display": "Hearing Problems",
          "value": "Hearing Problems"
        },
        {
          "display": "Ringing Ears",
          "value": "Ringing Ears"
        },
        {
          "display": "Sensory Changes",
          "value": "Sensory Changes"
        },
        {
          "display": "Wheezy or Whistling Chest",
          "value": "Wheezy or Whistling Chest"
        },
        {
          "display": "Bloating",
          "value": "Bloating"
        },
        {
          "display": "Blood in Bowel Movement",
          "value": "Blood in Bowel Movement"
        },
        {
          "display": "Bowel Changes",
          "value": "Bowel Changes"
        },
        {
          "display": "Constipation",
          "value": "Constipation"
        },
        {
          "display": "Diarrhea",
          "value": "Diarrhea"
        },
        {
          "display": "Excessive Hunger",
          "value": "Excessive Hunger"
        },
        {
          "display": "Excessive Thirst",
          "value": "Excessive Thirst"
        },
        {
          "display": "Gas",
          "value": "Gas"
        },
        {
          "display": "Indigestion / Heartburn",
          "value": "Indigestion / Heartburn"
        },
        {
          "display": "Intolerance of Dairy / Fatty Foods",
          "value": "Intolerance of Dairy / Fatty Foods"
        },
        {
          "display": "Poor Appetite",
          "value": "Poor Appetite"
        },
        {
          "display": "Stomach Pain",
          "value": "Stomach Pain"
        },
        {
          "display": "Back Pain",
          "value": "Back Pain"
        },
        {
          "display": "Frequent backaches",
          "value": "Frequent backaches"
        },
        {
          "display": "Muscle weakness",
          "value": "Muscle weakness"
        },
        {
          "display": "Neck Pain",
          "value": "Neck Pain"
        },
        {
          "display": "Swelling of Joints",
          "value": "Swelling of Joints"
        },
        {
          "display": "Tremors / Shaking of Hands",
          "value": "Tremors / Shaking of Hands"
        },
        {
          "display": "Boils or Cysts - Recurrent",
          "value": "Boils or Cysts - Recurrent"
        },
        {
          "display": "Bruise Easily",
          "value": "Bruise Easily"
        },
        {
          "display": "Growth on Skin",
          "value": "Growth on Skin"
        },
        {
          "display": "Hives",
          "value": "Hives"
        },
        {
          "display": "Itcing",
          "value": "Itcing"
        },
        {
          "display": "Mole Changes",
          "value": "Mole Changes"
        },
        {
          "display": "Rash",
          "value": "Rash"
        },
        {
          "display": "Scars",
          "value": "Scars"
        },
        {
          "display": "Sore that Won't Heal",
          "value": "Sore that Won't Heal"
        },
        {
          "display": "Bladder Infection",
          "value": "Bladder Infection"
        },
        {
          "display": "Frequent or Painful Urination",
          "value": "Frequent or Painful Urination"
        },
        {
          "display": "Problems with Urination",
          "value": "Problems with Urination"
        },
        {
          "display": "Urinate Frequently at Night",
          "value": "Urinate Frequently at Night"
        }
      ]
    },
    "description": "Please select any symptons this person is currently experiencing.",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "symptoms",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Symptoms"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What ingredients or materials are needed for this task?",
    "profile_template": {
      "multi": "true",
      "id": "0164",
      "name": "Recipes & Instructions",
      "image_name": "instructions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "instructions_ingredients_materials",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Ingredients / Materials"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Recipes & Instructions"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the first name as it appears on the birth certificate?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "first_name_on_birth_certificate",
    "metadata": {
      "alias": [
        "birthCertFirstName"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Dry Wall",
          "value": "Dry Wall"
        },
        {
          "display": "Wood lath and Plaster",
          "value": "Wood lath and Plaster"
        }
      ]
    },
    "description": "What material are your interior walls made of?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_interior_wall_construction",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Interior Wall Construction"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Approximately how many cigarettes / cigars / pipes does this person consume per day?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "frequency_of_tobacco_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Frequency of Tobacco Use"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many people were in the car at the time of the accident?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "number_of_people_in_the_car",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Number of People in the Car"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's personality.",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "kids_person_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Personality Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Sedentary",
          "value": "Sedentary"
        },
        {
          "display": "Moderate",
          "value": "Moderate"
        },
        {
          "display": "Vigorous",
          "value": "Vigorous"
        }
      ]
    },
    "description": "What level of exercise does this person get?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "exercise_level",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Exercise Level"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the Equifax score?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "equifax_credit_score",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Equifax Score"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person exercise regularly?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "exercise_habits",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Exercise Habits"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for customer service?",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_customer_service_phone_number",
    "metadata": {
      "alias": [
        "customerServiceTelephone"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Customer Service Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/cities"
    },
    "description": "What city was the passport issued in?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "city_of_issuance",
    "metadata": {
      "alias": [
        "passportIssuingCity"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "City of Issuance"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Short (S)",
          "value": "Short (S)"
        },
        {
          "display": "Regular (R)",
          "value": "Regular (R)"
        },
        {
          "display": "Long (L)",
          "value": "Long (L)"
        },
        {
          "display": "X-Long (XL)",
          "value": "X-Long (XL)"
        }
      ]
    },
    "description": "What is your coat length?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_coat_length",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Coat Length"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Card Contact Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the certificate number?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_number",
    "metadata": {
      "alias": [
        "birthCertNumber"
      ],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Birth Certificate Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "0P",
          "value": "0P"
        },
        {
          "display": "2P",
          "value": "2P"
        },
        {
          "display": "4P",
          "value": "4P"
        },
        {
          "display": "6P",
          "value": "6P"
        },
        {
          "display": "8P",
          "value": "8P"
        },
        {
          "display": "10P",
          "value": "10P"
        },
        {
          "display": "12P",
          "value": "12P"
        },
        {
          "display": "14P",
          "value": "14P"
        },
        {
          "display": "12W",
          "value": "12W"
        },
        {
          "display": "14W",
          "value": "14W"
        },
        {
          "display": "16W",
          "value": "16W"
        },
        {
          "display": "18W",
          "value": "18W"
        },
        {
          "display": "20W",
          "value": "20W"
        },
        {
          "display": "22W",
          "value": "22W"
        },
        {
          "display": "24W",
          "value": "24W"
        },
        {
          "display": "28W",
          "value": "28W"
        },
        {
          "display": "30W",
          "value": "30W"
        },
        {
          "display": "32W",
          "value": "32W"
        },
        {
          "display": "XXS",
          "value": "XXS"
        },
        {
          "display": "XS",
          "value": "XS"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What size dress do you wear?",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_dress_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Dress Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this birth certificate.",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Birth Certificate Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Finished",
          "value": "Finished"
        },
        {
          "display": "Unfinished",
          "value": "Unfinished"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this home have a basement?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Basement"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Baileys",
          "value": "Baileys"
        },
        {
          "display": "Port",
          "value": "Port"
        },
        {
          "display": "Madeira",
          "value": "Madeira"
        },
        {
          "display": "Sherry",
          "value": "Sherry"
        },
        {
          "display": "Moscato",
          "value": "Moscato"
        },
        {
          "display": "Ice Wine",
          "value": "Ice Wine"
        },
        {
          "display": "Sauternes",
          "value": "Sauternes"
        },
        {
          "display": "Tokaji Aszú",
          "value": "Tokaji Aszú"
        },
        {
          "display": "Cognac",
          "value": "Cognac"
        },
        {
          "display": "Armagnac",
          "value": "Armagnac"
        },
        {
          "display": "Scotch",
          "value": "Scotch"
        },
        {
          "display": "Coffee",
          "value": "Coffee"
        },
        {
          "display": "Decaf Coffee",
          "value": "Decaf Coffee"
        },
        {
          "display": "Tea",
          "value": "Tea"
        }
      ]
    },
    "description": "What type of after dinner drink do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_after_dinner_drinks",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "After Dinner Drinks"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What military affiliation is this person a part of?",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_affiliation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Affiliation"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Do you have an umbrella policy?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "umbrella_policy",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Umbrella Policy"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was the test or assessment completed?",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "testscore_test_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Test Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is this person's temperament?",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "childs_temperment",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Temperament"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Bank Account",
          "value": "Bank Account"
        },
        {
          "display": "Credit Card",
          "value": "Credit Card"
        },
        {
          "display": "TV",
          "value": "TV"
        },
        {
          "display": "Cable",
          "value": "Cable"
        },
        {
          "display": "Car Loan",
          "value": "Car Loan"
        },
        {
          "display": "Gas",
          "value": "Gas"
        },
        {
          "display": "Internet",
          "value": "Internet"
        },
        {
          "display": "Loan",
          "value": "Loan"
        },
        {
          "display": "Mortgage",
          "value": "Mortgage"
        },
        {
          "display": "Power",
          "value": "Power"
        },
        {
          "display": "Satellite",
          "value": "Satellite"
        },
        {
          "display": "Telephone",
          "value": "Telephone"
        },
        {
          "display": "Trash",
          "value": "Trash"
        },
        {
          "display": "Water",
          "value": "Water"
        }
      ]
    },
    "description": "What kind of account is this?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        5
      ],
      "synonym": [],
      "name": [
        "Account Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Feet",
          "value": "Feet"
        },
        {
          "display": "Hours",
          "value": "Hours"
        },
        {
          "display": "Inches",
          "value": "Inches"
        },
        {
          "display": "Kilograms",
          "value": "Kilograms"
        },
        {
          "display": "Meters",
          "value": "Meters"
        },
        {
          "display": "Miles",
          "value": "Miles"
        },
        {
          "display": "Minutes",
          "value": "Minutes"
        },
        {
          "display": "Number",
          "value": "Number"
        },
        {
          "display": "Pounds",
          "value": "Pounds"
        },
        {
          "display": "Text",
          "value": "Text"
        }
      ]
    },
    "description": "What is the unit of measure for the value you are tracking? (i.e. lbs, miles, number, etc.)",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_unit_of_measure",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Unit of Measure"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person regularly use sunscreen?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "sunscreen_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Sunscreen Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much is the security deposit?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_deposit",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Security Deposit"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this person currently sexually active?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "sexual_activity",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Sexual Activity"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is included as a part of this rental?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rent_includes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Rent Includes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's rank?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "dadcac_rank",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Rank"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to remain in your own home for as long as possible?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_residence",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Residence"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much does this pet weigh?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_weight",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Pet Weight"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_date_of_birth.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Pet Date of Birth Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "6m",
          "value": "6m"
        },
        {
          "display": "12m",
          "value": "12m"
        },
        {
          "display": "18m",
          "value": "18m"
        },
        {
          "display": "2T",
          "value": "2T"
        },
        {
          "display": "3T",
          "value": "3T"
        },
        {
          "display": "4T",
          "value": "4T"
        },
        {
          "display": "5T",
          "value": "5T"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "4X",
          "value": "4X"
        },
        {
          "display": "5X",
          "value": "5X"
        },
        {
          "display": "6X",
          "value": "6X"
        },
        {
          "display": "7X",
          "value": "7X"
        },
        {
          "display": "8X",
          "value": "8X"
        },
        {
          "display": "9X",
          "value": "9X"
        },
        {
          "display": "10X",
          "value": "10X"
        },
        {
          "display": "11X",
          "value": "11X"
        },
        {
          "display": "12X",
          "value": "12X"
        },
        {
          "display": "13X",
          "value": "13X"
        },
        {
          "display": "14X",
          "value": "14X"
        },
        {
          "display": "15X",
          "value": "15X"
        },
        {
          "display": "16X",
          "value": "16X"
        },
        {
          "display": "4H",
          "value": "4H"
        },
        {
          "display": "6H",
          "value": "6H"
        },
        {
          "display": "8H",
          "value": "8H"
        },
        {
          "display": "10H",
          "value": "10H"
        },
        {
          "display": "12H",
          "value": "12H"
        },
        {
          "display": "14H",
          "value": "14H"
        },
        {
          "display": "16H",
          "value": "16H"
        },
        {
          "display": "18H",
          "value": "18H"
        },
        {
          "display": "20H",
          "value": "20H"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your child's shirt size?",
    "profile_template": {
      "multi": "true",
      "id": "0174",
      "name": "Kid's Clothing Size",
      "image_name": "boys-and-girls-clothing-pref.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_girls_shirt_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Shirt Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_purchase_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Purchase Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the personal injury coverage for medical claims?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_injury_protection_medical",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Personal Injury Protection - Medical"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "0P",
          "value": "0P"
        },
        {
          "display": "2P",
          "value": "2P"
        },
        {
          "display": "4P",
          "value": "4P"
        },
        {
          "display": "6P",
          "value": "6P"
        },
        {
          "display": "8P",
          "value": "8P"
        },
        {
          "display": "10P",
          "value": "10P"
        },
        {
          "display": "12P",
          "value": "12P"
        },
        {
          "display": "14P",
          "value": "14P"
        },
        {
          "display": "12W",
          "value": "12W"
        },
        {
          "display": "14W",
          "value": "14W"
        },
        {
          "display": "16W",
          "value": "16W"
        },
        {
          "display": "18W",
          "value": "18W"
        },
        {
          "display": "20W",
          "value": "20W"
        },
        {
          "display": "22W",
          "value": "22W"
        },
        {
          "display": "24W",
          "value": "24W"
        },
        {
          "display": "28W",
          "value": "28W"
        },
        {
          "display": "30W",
          "value": "30W"
        },
        {
          "display": "32W",
          "value": "32W"
        },
        {
          "display": "XXS",
          "value": "XXS"
        },
        {
          "display": "XS",
          "value": "XS"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your shirt size?",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_shirt_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Shirt Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the net operating income for this year?",
    "profile_template": {
      "multi": "true",
      "id": "0161",
      "name": "Revenue & Income",
      "image_name": "revenue_income.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_net_operating_income",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Net Operating Income"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Revenue & Income"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_issue_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Passport Issue Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Has this person ever used needles to inject drugs?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "needle_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Needle Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_payoff_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Loan Payoff Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_out_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Move Out Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the bodily injury liability coverage?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "liability_protection_bodily_injury",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Liability Protection - Bodily Injury"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this investment account.",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Investment Account Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Car",
          "value": "Car"
        },
        {
          "display": "Motorcycle",
          "value": "Motorcycle"
        }
      ]
    },
    "description": "What type of vehicle is this insurance for?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "insured_vehicle",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Insured Vehicle"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to remain as independent as possible for as long as possible?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_independence",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Independence"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Radiant",
          "value": "Radiant"
        },
        {
          "display": "Forced Air",
          "value": "Forced Air"
        },
        {
          "display": "Heat Pump",
          "value": "Heat Pump"
        },
        {
          "display": "Baseboard",
          "value": "Baseboard"
        },
        {
          "display": "None",
          "value": "None"
        }
      ]
    },
    "description": "What kind of heating system does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "heating_system",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Heating System"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "property_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the federal income tax witholding?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "federal_income_tax",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Federal Income Tax"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the size or type of engine in your motorcycle?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_engine_type_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Engine Type/Size"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What drivetrain does your vehicle have?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_drivetrain",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Drivetrain"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Beige",
          "value": "Beige"
        },
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Blue",
          "value": "Blue"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Green",
          "value": "Green"
        },
        {
          "display": "Grey",
          "value": "Grey"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Pink",
          "value": "Pink"
        },
        {
          "display": "Purple",
          "value": "Purple"
        },
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Yellow",
          "value": "Yellow"
        }
      ]
    },
    "description": "What clothing colors do you typically buy for your child?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_favorite_colors",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Favorite Colors"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Quit, but started again",
          "value": "Quit, but started again"
        }
      ]
    },
    "description": "Has this person considered quitting their tobacco use?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "considered_quitting_tobacco_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Considered Quitting Tobacco Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Contact Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "11",
          "value": "11"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "13",
          "value": "13"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "15",
          "value": "15"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "17",
          "value": "17"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "19",
          "value": "19"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "21",
          "value": "21"
        },
        {
          "display": "22",
          "value": "22"
        },
        {
          "display": "23",
          "value": "23"
        },
        {
          "display": "24",
          "value": "24"
        },
        {
          "display": "25",
          "value": "25"
        },
        {
          "display": "26",
          "value": "26"
        },
        {
          "display": "27",
          "value": "27"
        },
        {
          "display": "28",
          "value": "28"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "30",
          "value": "30"
        },
        {
          "display": "31",
          "value": "31"
        }
      ]
    },
    "description": "On which day of the month is this bill usually due? (enter number 1-31)",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_due_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Day Statement Due"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Use this field to enter any additional details about the charity.",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_info_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Charity Info Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Card Contact Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Walk-Out Basement",
          "value": "Walk-Out Basement"
        },
        {
          "display": "Closed Basement",
          "value": "Closed Basement"
        },
        {
          "display": "Crawlspace",
          "value": "Crawlspace"
        },
        {
          "display": "Slab",
          "value": "Slab"
        }
      ]
    },
    "description": "What type of basement does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basement_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Basement Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's allergies.",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "alle_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Allergy Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the security password for the alarm company if they call when your alarm is going off?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "alarm_password",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Alarm Password"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If the card is paid automatically each month, which account is debited?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_card_account_debited_during_auto_pay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Account Debited During Auto-Pay"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What date did the accident take place?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Accident Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is this used for?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wiki_purpose",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Wiki Purpose"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your Wi-Fi Password?",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_password",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Wi-Fi Password"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address (URL) for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bank_website_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Website Address"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Warranty Phone Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this car and motorcycle insurance.",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_motorcycle_insurance_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Vehicle Insurance Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Asthma",
          "value": "Asthma"
        },
        {
          "display": "Alcohol/Drug Abuse",
          "value": "Alcohol/Drug Abuse"
        },
        {
          "display": "Allergies",
          "value": "Allergies"
        },
        {
          "display": "Alzheimer's",
          "value": "Alzheimer's"
        },
        {
          "display": "Anemia",
          "value": "Anemia"
        },
        {
          "display": "Anxiety / Depression",
          "value": "Anxiety / Depression"
        },
        {
          "display": "Appendicitis",
          "value": "Appendicitis"
        },
        {
          "display": "Arrhythmia (irregular heart beat)",
          "value": "Arrhythmia (irregular heart beat)"
        },
        {
          "display": "Arthritis / Gout",
          "value": "Arthritis / Gout"
        },
        {
          "display": "Bipolar",
          "value": "Bipolar"
        },
        {
          "display": "Bladder problems / Incontinence",
          "value": "Bladder problems / Incontinence"
        },
        {
          "display": "Bleeding Disorder",
          "value": "Bleeding Disorder"
        },
        {
          "display": "Blood Clots (DVT)",
          "value": "Blood Clots (DVT)"
        },
        {
          "display": "Bronchitis",
          "value": "Bronchitis"
        },
        {
          "display": "Cancer Breast",
          "value": "Cancer Breast"
        },
        {
          "display": "Cancer Colon",
          "value": "Cancer Colon"
        },
        {
          "display": "Cancer Lymph",
          "value": "Cancer Lymph"
        },
        {
          "display": "Cancer Other",
          "value": "Cancer Other"
        },
        {
          "display": "Cancer Ovarian",
          "value": "Cancer Ovarian"
        },
        {
          "display": "Cancer Prostate",
          "value": "Cancer Prostate"
        },
        {
          "display": "Cancer Skin",
          "value": "Cancer Skin"
        },
        {
          "display": "Cancer Thyroid",
          "value": "Cancer Thyroid"
        },
        {
          "display": "Cancer Uterine",
          "value": "Cancer Uterine"
        },
        {
          "display": "Carpal Tunnel",
          "value": "Carpal Tunnel"
        },
        {
          "display": "Congestive Heart Failure",
          "value": "Congestive Heart Failure"
        },
        {
          "display": "Crohn's Disease",
          "value": "Crohn's Disease"
        },
        {
          "display": "Dementia",
          "value": "Dementia"
        },
        {
          "display": "Diabetes Type 1",
          "value": "Diabetes Type 1"
        },
        {
          "display": "Diabetes Type 2",
          "value": "Diabetes Type 2"
        },
        {
          "display": "Diverticulitis",
          "value": "Diverticulitis"
        },
        {
          "display": "Ecsema",
          "value": "Ecsema"
        },
        {
          "display": "Emphysema / COPD",
          "value": "Emphysema / COPD"
        },
        {
          "display": "Fibromyalgia",
          "value": "Fibromyalgia"
        },
        {
          "display": "Gallstones",
          "value": "Gallstones"
        },
        {
          "display": "GERD (Acid Reflux)",
          "value": "GERD (Acid Reflux)"
        },
        {
          "display": "Glaucoma",
          "value": "Glaucoma"
        },
        {
          "display": "Goiter",
          "value": "Goiter"
        },
        {
          "display": "Headaches",
          "value": "Headaches"
        },
        {
          "display": "Heart Attack / Coronary Artery Disease",
          "value": "Heart Attack / Coronary Artery Disease"
        },
        {
          "display": "Heart Disease",
          "value": "Heart Disease"
        },
        {
          "display": "Hepatitis",
          "value": "Hepatitis"
        },
        {
          "display": "Hernia",
          "value": "Hernia"
        },
        {
          "display": "High Blood Pressure",
          "value": "High Blood Pressure"
        },
        {
          "display": "High Cholesterol (Hyperlipidemia)",
          "value": "High Cholesterol (Hyperlipidemia)"
        },
        {
          "display": "HIV/AIDS",
          "value": "HIV/AIDS"
        },
        {
          "display": "Irritabel Bowel",
          "value": "Irritabel Bowel"
        },
        {
          "display": "Kidney Disease",
          "value": "Kidney Disease"
        },
        {
          "display": "Kidney Stones",
          "value": "Kidney Stones"
        },
        {
          "display": "Liver Disease",
          "value": "Liver Disease"
        },
        {
          "display": "Lung Disease",
          "value": "Lung Disease"
        },
        {
          "display": "Lupus",
          "value": "Lupus"
        },
        {
          "display": "Mental Illness",
          "value": "Mental Illness"
        },
        {
          "display": "Migraine Headaches",
          "value": "Migraine Headaches"
        },
        {
          "display": "Multiple Sclerosis",
          "value": "Multiple Sclerosis"
        },
        {
          "display": "Neurological Disease",
          "value": "Neurological Disease"
        },
        {
          "display": "Neuropathy",
          "value": "Neuropathy"
        },
        {
          "display": "Obesity",
          "value": "Obesity"
        },
        {
          "display": "Osteopenia / Osteoporosis",
          "value": "Osteopenia / Osteoporosis"
        },
        {
          "display": "Pacemaker",
          "value": "Pacemaker"
        },
        {
          "display": "Parkinson's Disease",
          "value": "Parkinson's Disease"
        },
        {
          "display": "Peripheral Vascular Disease",
          "value": "Peripheral Vascular Disease"
        },
        {
          "display": "Prostate Problem",
          "value": "Prostate Problem"
        },
        {
          "display": "Psoriasis",
          "value": "Psoriasis"
        },
        {
          "display": "Pulmonary Embolism",
          "value": "Pulmonary Embolism"
        },
        {
          "display": "Respiratory Disease",
          "value": "Respiratory Disease"
        },
        {
          "display": "Rheumatoid Arthritis",
          "value": "Rheumatoid Arthritis"
        },
        {
          "display": "Sciatica",
          "value": "Sciatica"
        },
        {
          "display": "Seizure Disease",
          "value": "Seizure Disease"
        },
        {
          "display": "Sleep Apnea",
          "value": "Sleep Apnea"
        },
        {
          "display": "Stroke",
          "value": "Stroke"
        },
        {
          "display": "Suicide/Depression",
          "value": "Suicide/Depression"
        },
        {
          "display": "Thyroid Disease",
          "value": "Thyroid Disease"
        },
        {
          "display": "Tuberculosis",
          "value": "Tuberculosis"
        },
        {
          "display": "Ulcerative Colitis",
          "value": "Ulcerative Colitis"
        }
      ]
    },
    "description": "Please select any conditions this person has or had.",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "conditions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        4
      ],
      "synonym": [],
      "name": [
        "Conditions"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the uninsured motorist coverage for property damage?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "uninsured_motorist_coverage_property_damage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Uninsured Motorist Coverage - Property Damage"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What are the steps needed to complete this task?",
    "profile_template": {
      "multi": "true",
      "id": "0164",
      "name": "Recipes & Instructions",
      "image_name": "instructions.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "instructions_steps",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Steps"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Recipes & Instructions"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_start_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Start Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_start_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Start Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "If the rate resets, what will the new rate be?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loans_reset_rate",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Reset Rate"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Male",
          "value": "Male"
        },
        {
          "display": "Female",
          "value": "Female"
        }
      ]
    },
    "description": "Sexual partners is/have been:",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "sexual_partners",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Sexual Partners"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Alarm Sounds Only",
          "value": "Alarm Sounds Only"
        },
        {
          "display": "Signals to a Monitoring System",
          "value": "Signals to a Monitoring System"
        },
        {
          "display": "Fire Alarm Reporting to a Monitoring System",
          "value": "Fire Alarm Reporting to a Monitoring System"
        },
        {
          "display": "None",
          "value": "None"
        }
      ]
    },
    "description": "Does this home have a security system?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_system",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Security System"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this rental.",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Rental Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "None",
          "value": "None"
        },
        {
          "display": "Kosher",
          "value": "Kosher"
        },
        {
          "display": "Halaal",
          "value": "Halaal"
        },
        {
          "display": "Hindu",
          "value": "Hindu"
        },
        {
          "display": "Sikh",
          "value": "Sikh"
        },
        {
          "display": "Buddhist",
          "value": "Buddhist"
        }
      ]
    },
    "description": "Which, if any, of the following religious dietary customs do you follow?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_religious_dietary_restrictions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Religious Dietary Restrictions"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this traveler's Redress Number?",
    "profile_template": {
      "multi": "true",
      "id": "0183",
      "name": "Trusted Traveler",
      "image_name": "trusted_traveler.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "redress_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Redress Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Trusted Traveler"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_purchase_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Purchase Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What size is this product or thing?",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Product/Thing Size"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for the police district?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Police District Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Guarantee Replacement Cost",
          "value": "Guarantee Replacement Cost"
        }
      ]
    },
    "description": "How much personal property coverage do you have?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_property_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Personal Property Coverage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was this pet born?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_date_of_birth",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Pet Date of Birth"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_date_of_birth.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Pet Date of Birth Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who was this surgery performed by?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_performed_by",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Performed By"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the personal injury coverage for funeral claims?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_injury_protection_funeral",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Personal Injury Protection - Funeral"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this passport.",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "notes_passport",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Passport Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "One Time",
          "value": "One Time"
        },
        {
          "display": "Hourly",
          "value": "Hourly"
        },
        {
          "display": "Daily",
          "value": "Daily"
        },
        {
          "display": "Weekly",
          "value": "Weekly"
        },
        {
          "display": "Monthly",
          "value": "Monthly"
        },
        {
          "display": "Yearly",
          "value": "Yearly"
        }
      ]
    },
    "description": "What is the payment frequency for this rental?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_payment_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Payment Frequency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Herpes",
          "value": "Herpes"
        },
        {
          "display": "Gohorrhea",
          "value": "Gohorrhea"
        },
        {
          "display": "Genital Warts/HPV",
          "value": "Genital Warts/HPV"
        },
        {
          "display": "Trichomas",
          "value": "Trichomas"
        },
        {
          "display": "Syphilis",
          "value": "Syphilis"
        },
        {
          "display": "Chlamydia",
          "value": "Chlamydia"
        }
      ]
    },
    "description": "Which infections has this person had in the past?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "past_infections",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Past Infections"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the outstanding principal as of date?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_principal_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Outstanding Principal Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the tag of this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_tag",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Tag"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No known allergies",
          "value": "No known allergies"
        },
        {
          "display": "Grass",
          "value": "Grass"
        },
        {
          "display": "Pollen",
          "value": "Pollen"
        },
        {
          "display": "Ragweed",
          "value": "Ragweed"
        },
        {
          "display": "Tree",
          "value": "Tree"
        },
        {
          "display": "Weed",
          "value": "Weed"
        }
      ]
    },
    "description": "Is this person allergic to any of the following outdoor allergens?",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "outdoor_allergies",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Outdoor Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who owned this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_owner",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Owner"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who was the driver of this vehicle during the accident?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_driver",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Driver"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the serial number of your lock's key?",
    "profile_template": {
      "multi": "true",
      "id": "0117",
      "name": "Combination Locks",
      "image_name": "locks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "bike_lock_key_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Lock Key Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Combination Locks"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "initial": {
          "mask": "",
          "display_name": "Initial",
          "id": "initial"
        },
        "full": {
          "mask": "",
          "display_name": "Full",
          "id": "full"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "full"
      }
    },
    "description": "What is the middle name as it appears on the social security card?",
    "profile_template": {
      "multi": "true",
      "id": "0032",
      "name": "Social Security Card",
      "image_name": "socialsecuritynumber.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "middle_name_on_social_security_card",
    "metadata": {
      "alias": [
        "ssnMiddleName"
      ],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Middle Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Social Security Card"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your least favorite food?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_least_favorite_food",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Least Favorite Foods"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last skin check?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_skin_check",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Last Skin Check"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_issue_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Loan Issue Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What are the special instructions if the alarm happens to go off? What will happen?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "if_the_alarm_goes_off",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "If The Alarm Goes Off"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this health insurance.",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insurance_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Health Insurance Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_expiration_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Insurance Expiration Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_expiration_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Insurance Expiration Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "my_car_basic_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the flood insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "flood_insurance_policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Flood Insurance Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the first name as it appears on the passport?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "first_name_on_passport",
    "metadata": {
      "alias": [
        "passportFirstName"
      ],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/sports_team"
    },
    "description": "What are your families favorite sports teams?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_favorite_sports_teams",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Favorite Sports Teams"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fax_number_for_support.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Fax Number for Support Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to remain as financially independent as possible?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_financial_independence",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Financial Independence"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/kids_clothing_brands"
    },
    "description": "What are your favorite children's clothing brands?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_favorite_brands",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Favorite Brands"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No known allergies",
          "value": "No known allergies"
        },
        {
          "display": "Coconut",
          "value": "Coconut"
        },
        {
          "display": "Eggs",
          "value": "Eggs"
        },
        {
          "display": "Fish",
          "value": "Fish"
        },
        {
          "display": "Milk",
          "value": "Milk"
        },
        {
          "display": "Hazelnuts, Almonds, or Walnuts (nuts from trees)",
          "value": "Hazelnuts, Almonds, or Walnuts (nuts from trees)"
        },
        {
          "display": "Peanuts (or other ground nuts)",
          "value": "Peanuts (or other ground nuts)"
        },
        {
          "display": "Poultry",
          "value": "Poultry"
        },
        {
          "display": "Shellfish (mussels, crab, shrimp)",
          "value": "Shellfish (mussels, crab, shrimp)"
        },
        {
          "display": "Soya",
          "value": "Soya"
        },
        {
          "display": "Tomatoes",
          "value": "Tomatoes"
        },
        {
          "display": "Wheat",
          "value": "Wheat"
        },
        {
          "display": "Strawberries",
          "value": "Strawberries"
        }
      ]
    },
    "description": "Is this person allergic to any of the following foods?",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "food_allergies",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Food Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What is the due date?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_due_real_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Due Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Has this person ever been pregnant?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "ever_pregnant",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Ever Pregnant"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What restrictions, if any, does this driver's license have listed?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_restrictions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Driver's Restrictions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did this insurance coverage end?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_end_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "End Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes on your dental history.",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "dental_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Dental Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What date did this happen?",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this person currently pregnant?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "currently_pregnant",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Currently Pregnant"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What condition did this treat?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_condition",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Condition"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's total cholesterol number?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "cholesterol_total",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Cholesterol - Total"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Were there any complications experienced from this surgery?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_complications",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Complications"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about the accident.",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_accident_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Car Accident Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "11",
          "value": "11"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "13",
          "value": "13"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "15",
          "value": "15"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "17",
          "value": "17"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "19",
          "value": "19"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "21",
          "value": "21"
        },
        {
          "display": "22",
          "value": "22"
        },
        {
          "display": "23",
          "value": "23"
        },
        {
          "display": "24",
          "value": "24"
        },
        {
          "display": "25",
          "value": "25"
        },
        {
          "display": "26",
          "value": "26"
        },
        {
          "display": "27",
          "value": "27"
        },
        {
          "display": "28",
          "value": "28"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "30",
          "value": "30"
        },
        {
          "display": "31",
          "value": "31"
        }
      ]
    },
    "description": "On which day of the month is the bill usually received? (enter number 1-31)",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bill_arrive_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Day Statement Arrives"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is money automatically transferred into this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "auto_transfer_enabled",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Auto Transfer Enabled"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "O+",
          "value": "O+"
        },
        {
          "display": "A+",
          "value": "A+"
        },
        {
          "display": "B+",
          "value": "B+"
        },
        {
          "display": "AB+",
          "value": "AB+"
        },
        {
          "display": "O-",
          "value": "O-"
        },
        {
          "display": "A-",
          "value": "A-"
        },
        {
          "display": "B-",
          "value": "B-"
        },
        {
          "display": "AB-",
          "value": "AB-"
        }
      ]
    },
    "description": "What is this person's blood type?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_basic_blood_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Blood Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What associations do you belong to?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_associations",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Associations"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Where are the alarm panels located in your home?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alarm_panel_location",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Alarm Panel Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Every day",
          "value": "Every day"
        },
        {
          "display": "Several times a week",
          "value": "Several times a week"
        },
        {
          "display": "A few times a week",
          "value": "A few times a week"
        },
        {
          "display": "A few times a month",
          "value": "A few times a month"
        },
        {
          "display": "Rarely",
          "value": "Rarely"
        },
        {
          "display": "Never",
          "value": "Never"
        }
      ]
    },
    "description": "How often does this person drink alcohol?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_basic_alcohol_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Alcohol Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How do you activate and deactivate the alarm system?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "alarm_instructions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Alarm Instructions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of your alarm company?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alarm_company",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Alarm Company"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What activities do you participate in with this charity?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_activities",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Activities"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What were the weather conditions when the accident took place?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_weather_conditions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Accident Weather Conditions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe the accident.",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_description",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Accident Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your clothing essentials.",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "clothing_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Women's Clothing Preference Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        3
      ],
      "synonym": [],
      "name": [
        "Accident Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name for your Wi-Fi network?",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_network",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Wi-Fi Network (SSID)"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address (URL) for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_website_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Website Address"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the warranty number?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Warranty Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this person's veteran health identification Card info.",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_health_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Veteran Health Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much coverage does your umbrella policy have?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "umbrella_policy_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Umbrella Policy Coverage"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Attached",
          "value": "Attached"
        },
        {
          "display": "Detached",
          "value": "Detached"
        }
      ]
    },
    "description": "What type of garage do you have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_type_of_garage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Type of Garage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this test or assessment.",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "testscore_test_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Test Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe treatment instructions for the allergic reaction.",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "allergic_treatment_instructions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Treatment Instructions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What is the date for this statement?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bills_statement_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Statement Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_start_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Start Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_start_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Start Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_start_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Start Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this home have a sprinkler system?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "sprinkler_system",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Sprinkler System"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the companies server address?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "server_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Server Address"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the right eye axis measurement?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye_access",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Right Eye Axis"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Sunday",
          "value": "Sunday"
        },
        {
          "display": "Monday",
          "value": "Monday"
        },
        {
          "display": "Tuesday",
          "value": "Tuesday"
        },
        {
          "display": "Wednesday",
          "value": "Wednesday"
        },
        {
          "display": "Thursday",
          "value": "Thursday"
        },
        {
          "display": "Friday",
          "value": "Friday"
        },
        {
          "display": "Saturday",
          "value": "Saturday"
        }
      ]
    },
    "description": "What days of the week does this routine take place?",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "routine_days",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Routine Days"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What, if any, riders does this policy include?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_riders",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Riders"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to create a safety net in the event of an emergency or crisis situation?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_safety_net",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Safety Net"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's reading glasses.",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vision_reading_glasses_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Reading Glasses Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Car",
          "value": "Car"
        },
        {
          "display": "Equipment",
          "value": "Equipment"
        },
        {
          "display": "Home",
          "value": "Home"
        },
        {
          "display": "Tool",
          "value": "Tool"
        }
      ]
    },
    "description": "What are you renting?",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_rental_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Rental Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Public",
          "value": "Public"
        },
        {
          "display": "Private",
          "value": "Private"
        }
      ]
    },
    "description": "Is this company publically traded?",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_public_or_private",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Public or Private"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person always wear protective sports gear?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "protective_sports_equipment",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Protective Sports Equipment"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to retire in a different location?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_retirement_relocation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Retirement Relocation"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Less than $10",
          "value": "Less than $10"
        },
        {
          "display": "$10 - $20",
          "value": "$10 - $20"
        },
        {
          "display": "$20 - $40",
          "value": "$20 - $40"
        },
        {
          "display": "$40 - $80",
          "value": "$40 - $80"
        },
        {
          "display": "$80 and above",
          "value": "$80 and above"
        }
      ]
    },
    "description": "What is the price range?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_price_range",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Price Range"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did the homeowners coverage start?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_in_effect",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Policy in Effect"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the renter's insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the physical damage coverage for collision?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "physical_damage_coverage_collision",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Physical Damage Coverage - Collision"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/pet_health"
    },
    "description": "List any pet health problems.",
    "profile_template": {
      "multi": "true",
      "id": "0046",
      "name": "Pet Health",
      "image_name": "myvet.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_health_problems",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Pet Health Problems"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet Health"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much personal liability coverage do you have?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_liability_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Personal Liability Coverage"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "passport_issue_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Passport Issue Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the outstanding interest amount?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_interest",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Outstanding Interest"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe this car's damage from the accident.",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_damage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Other Vehicle's Damage"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the year of this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Year"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the model of this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_model",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Model"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this surgery.",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is color is this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_color",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Color"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "0P",
          "value": "0P"
        },
        {
          "display": "2P",
          "value": "2P"
        },
        {
          "display": "4P",
          "value": "4P"
        },
        {
          "display": "6P",
          "value": "6P"
        },
        {
          "display": "8P",
          "value": "8P"
        },
        {
          "display": "10P",
          "value": "10P"
        },
        {
          "display": "12P",
          "value": "12P"
        },
        {
          "display": "14P",
          "value": "14P"
        },
        {
          "display": "12W",
          "value": "12W"
        },
        {
          "display": "14W",
          "value": "14W"
        },
        {
          "display": "16W",
          "value": "16W"
        },
        {
          "display": "18W",
          "value": "18W"
        },
        {
          "display": "20W",
          "value": "20W"
        },
        {
          "display": "22W",
          "value": "22W"
        },
        {
          "display": "24W",
          "value": "24W"
        },
        {
          "display": "28W",
          "value": "28W"
        },
        {
          "display": "30W",
          "value": "30W"
        },
        {
          "display": "32W",
          "value": "32W"
        },
        {
          "display": "XXS",
          "value": "XXS"
        },
        {
          "display": "XS",
          "value": "XS"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What size pants do you wear?",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_pants_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Pants Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Any other notes on this medication?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Medication Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your clothing essentials.",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Men's ClothingPreference Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_out_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Move Out Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_payoff_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Loan Payoff Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_payoff_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Loan Payoff Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_issue_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Loan Issue Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Living",
          "value": "Living"
        },
        {
          "display": "Deceased",
          "value": "Deceased"
        }
      ]
    },
    "description": "Is this person living or deceased?",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "living_or_deceased",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Living or Deceased"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the lifetime maximum?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insu_lifetime_maximum",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Lifetime Maximum"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Term",
          "value": "Term"
        },
        {
          "display": "Whole Life",
          "value": "Whole Life"
        }
      ]
    },
    "description": "What type of life insurance is this?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_life_insurance_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Life Insurance Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many days are in this person's menstrual cycle?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "length_of_cycle",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Length of Cycle"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Explain to others how to pronounce your last name.",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_last_name_pronunciation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Last Name Pronunciation"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the last name as it appears on the birth certificate?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_name_on_birth_certificate",
    "metadata": {
      "alias": [
        "birthCertLastName"
      ],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Last Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last colon cancer screening?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_colon_cancer_screening",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Last Colon Cancer Screening"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total for investments?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "business_investment_farm",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Investments"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this infant or babies food preferences.",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_infant_baby_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Infant & Baby Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "23",
          "value": "23"
        },
        {
          "display": "24",
          "value": "24"
        },
        {
          "display": "25",
          "value": "25"
        },
        {
          "display": "26",
          "value": "26"
        },
        {
          "display": "27",
          "value": "27"
        },
        {
          "display": "27",
          "value": "27"
        },
        {
          "display": "28",
          "value": "28"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "30",
          "value": "30"
        },
        {
          "display": "31",
          "value": "31"
        },
        {
          "display": "32",
          "value": "32"
        },
        {
          "display": "33",
          "value": "33"
        }
      ]
    },
    "description": "What size jeans do you wear?",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_jean_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Jean Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any notes about this health history record.",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "health_history_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Health History Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this person on a hormone medication?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "hormone_medication",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Hormone Medication"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Self",
          "value": "Self"
        },
        {
          "display": "Spouse",
          "value": "Spouse"
        },
        {
          "display": "Mother",
          "value": "Mother"
        },
        {
          "display": "Father",
          "value": "Father"
        },
        {
          "display": "Sibling",
          "value": "Sibling"
        },
        {
          "display": "Child",
          "value": "Child"
        },
        {
          "display": "Other",
          "value": "Other"
        }
      ]
    },
    "description": "Who is this Health Record for?",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_record_relationship",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Health Record Relationship"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loan_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0175",
      "name": "Encrypted Notes & Files",
      "image_name": "notes_and_files_secure.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "secure_note_title",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Encrypted Notes & Files"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the federal indentifier on this card?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "dadcac_federal_identifier",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Federal Identifier"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Fixed",
          "value": "Fixed"
        },
        {
          "display": "Adjustable",
          "value": "Adjustable"
        }
      ]
    },
    "description": "Is the interest rate fixed or adjustable?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fixed_or_adjustable_rate",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Fixed or Adjustable Rate"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fax_number_for_support.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Fax Number for Support Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fax_number_for_support.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Fax Number for Support Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the download speed on this Wi-Fi network?",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_download_speed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Download Speed"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the customer service phone number for Equifax?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "equifax_customer_service",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Equifax Customer Service"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was this person's last menstrual period?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "date_of_last_menstrual_period",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Date of Last Menstrual Period"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "Identify the date the above account balance was retrieved.",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_date_of_account_balance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Date of Account Balance"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did the vehicle pass the test?",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_date_passed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Date Passed"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0160",
      "name": "Company Detail",
      "image_name": "business-detail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_date_established.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Date Established Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Company Detail"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Do you have a custom kitchen?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_basic_custom_kitchen",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Custom Kitchen"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Chocolate",
          "value": "Chocolate"
        },
        {
          "display": "Cake",
          "value": "Cake"
        },
        {
          "display": "Cheesecake",
          "value": "Cheesecake"
        },
        {
          "display": "Ice Cream",
          "value": "Ice Cream"
        },
        {
          "display": "Pudding",
          "value": "Pudding"
        },
        {
          "display": "Cookies",
          "value": "Cookies"
        },
        {
          "display": "Candy",
          "value": "Candy"
        },
        {
          "display": "Donuts",
          "value": "Donuts"
        },
        {
          "display": "Cupcakes",
          "value": "Cupcakes"
        },
        {
          "display": "Jell-O",
          "value": "Jell-O"
        },
        {
          "display": "Pie",
          "value": "Pie"
        },
        {
          "display": "Soufflé",
          "value": "Soufflé"
        },
        {
          "display": "Tarts",
          "value": "Tarts"
        },
        {
          "display": "I don't like any desserts",
          "value": "I don't like any desserts"
        }
      ]
    },
    "description": "What are your favorite desserts?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_dessert",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Dessert"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this item's current value.",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_current_value_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Current Value Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Contact Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Contact Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What does this medication treat?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_for",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Condition"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Excellent",
          "value": "Excellent"
        },
        {
          "display": "Very Good",
          "value": "Very Good"
        },
        {
          "display": "Good",
          "value": "Good"
        },
        {
          "display": "Fair",
          "value": "Fair"
        }
      ]
    },
    "description": "What is the condition of the vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_complx_condition",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Condition"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "How would you describe your clothing style?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_clothing_style_in_your_words",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Clothing Style, In Your Words"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe any important clothing likes and dislikes before we get into the details.",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "clothing_preferences_in_your_words",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Clothing Preferences, in your words"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your clothing preferences.",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "clothing_preferences_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Clothing Preferences Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's LDL (bad) cholesterol number?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "cholesterol_ldl",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Cholesterol - LDL"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to become involved in the community?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_community_involvement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Community Involvement"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total child support paid?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "child_support_paid",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Child Support Paid"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Card Contact Number First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Card Contact Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What kind of clothes do you normally wear to work? Do you have a \"uniform\"?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_business_attire_in_your_words",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Business Attire, In Your Words"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this birthday.",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Birthday Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Card Contact Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How many axels does your vehicle have?",
    "profile_template": {
      "multi": "true",
      "id": "0008",
      "name": "Vehicle",
      "image_name": "myauto.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_axel_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Axel Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Over the counter",
          "value": "Over the counter"
        },
        {
          "display": "Prescription only",
          "value": "Prescription only"
        }
      ]
    },
    "description": "Is this medication available over the counter or by prescription only?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_availability",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Availability"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "How much is automatically transferred into this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "amount_of_auto_transfer",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Amount of Auto Transfer"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "If this person is deceased, how old were they when they passed away?",
    "profile_template": {
      "multi": "true",
      "id": "0088",
      "name": "Health History",
      "image_name": "health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "age_of_death",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Age of Death"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alarm_company_phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Alarm Company Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this activity.",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "kids_routine_note",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Activity Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_contact_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Account Contact Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What was the number for the police report on this accident?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_police_report",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Accident Police Report"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "accident_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Accident Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any notes about this women's health history record.",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "womens_health_history_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Women's Health History Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Casual",
          "value": "Casual"
        },
        {
          "display": "Business Casual",
          "value": "Business Casual"
        },
        {
          "display": "Business Attire",
          "value": "Business Attire"
        }
      ]
    },
    "description": "What is your dress code at work?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_work_dress_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Work Dress Code"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your clothing sizes.",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_clothing_size_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Women's Clothing Size Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to remain healthy and active?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_work",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Work"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "email"
    },
    "description": "What is the email address for this witness?",
    "profile_template": {
      "multi": "true",
      "id": "0118",
      "name": "Vehicle Accident Witnesses",
      "image_name": "vehicle_accident_witnesses.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "witness_email",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Witness email"
      ],
      "semantic_type": [
        "email"
      ]
    },
    "pcategory": "Vehicle Accident Witnesses"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Enter the name of a witness to the car accident.",
    "profile_template": {
      "multi": "true",
      "id": "0118",
      "name": "Vehicle Accident Witnesses",
      "image_name": "vehicle_accident_witnesses.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "car_witness_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Witness name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident Witnesses"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about connecting to this Wi-Fi.",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_home_wi_fi_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Wi-Fi Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address (URL) for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "loans_website_address",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Website Address"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website associated with this bill?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "website_for_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this warranty.",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "essen_warranty_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Warranty Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What price did you pay for the warranty?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_cost",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Warranty Cost"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's eyes.",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "eyes_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Vision Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Amber Ale",
          "value": "Amber Ale"
        },
        {
          "display": "Amber Lager",
          "value": "Amber Lager"
        },
        {
          "display": "American Lager",
          "value": "American Lager"
        },
        {
          "display": "American Wheat Ale",
          "value": "American Wheat Ale"
        },
        {
          "display": "Barley Wine",
          "value": "Barley Wine"
        },
        {
          "display": "Belgian Ale",
          "value": "Belgian Ale"
        },
        {
          "display": "Bitter",
          "value": "Bitter"
        },
        {
          "display": "Blonde Ale",
          "value": "Blonde Ale"
        },
        {
          "display": "Bock",
          "value": "Bock"
        },
        {
          "display": "Brown Ale",
          "value": "Brown Ale"
        },
        {
          "display": "Cream Ale",
          "value": "Cream Ale"
        },
        {
          "display": "Dark Ale",
          "value": "Dark Ale"
        },
        {
          "display": "Dunkel",
          "value": "Dunkel"
        },
        {
          "display": "Hefeweizen",
          "value": "Hefeweizen"
        },
        {
          "display": "India Pale Ale",
          "value": "India Pale Ale"
        },
        {
          "display": "Kellerbier Lager",
          "value": "Kellerbier Lager"
        },
        {
          "display": "Kolsch Ale",
          "value": "Kolsch Ale"
        },
        {
          "display": "Lager",
          "value": "Lager"
        },
        {
          "display": "Lambic",
          "value": "Lambic"
        },
        {
          "display": "Light Lager",
          "value": "Light Lager"
        },
        {
          "display": "Marzen Lager",
          "value": "Marzen Lager"
        },
        {
          "display": "Mild Ale",
          "value": "Mild Ale"
        },
        {
          "display": "Oktoberfest",
          "value": "Oktoberfest"
        },
        {
          "display": "Old Ale",
          "value": "Old Ale"
        },
        {
          "display": "Pale Ale",
          "value": "Pale Ale"
        },
        {
          "display": "Pale Lager",
          "value": "Pale Lager"
        },
        {
          "display": "Pilsner",
          "value": "Pilsner"
        },
        {
          "display": "Porter",
          "value": "Porter"
        },
        {
          "display": "Schwarzbier Lager",
          "value": "Schwarzbier Lager"
        },
        {
          "display": "Stout",
          "value": "Stout"
        },
        {
          "display": "Vienna Lager",
          "value": "Vienna Lager"
        },
        {
          "display": "Wheat Beer",
          "value": "Wheat Beer"
        },
        {
          "display": "Adams Apple",
          "value": "Adams Apple"
        },
        {
          "display": "Barbera",
          "value": "Barbera"
        },
        {
          "display": "Bordeaux",
          "value": "Bordeaux"
        },
        {
          "display": "Burgundy",
          "value": "Burgundy"
        },
        {
          "display": "Cabernet Sauvignon",
          "value": "Cabernet Sauvignon"
        },
        {
          "display": "Champagne",
          "value": "Champagne"
        },
        {
          "display": "Chardonnay",
          "value": "Chardonnay"
        },
        {
          "display": "Chenin Blanc",
          "value": "Chenin Blanc"
        },
        {
          "display": "Cream Sherry",
          "value": "Cream Sherry"
        },
        {
          "display": "Double Decker Red",
          "value": "Double Decker Red"
        },
        {
          "display": "Elderberry",
          "value": "Elderberry"
        },
        {
          "display": "Gamay",
          "value": "Gamay"
        },
        {
          "display": "Gewurtztraminer",
          "value": "Gewurtztraminer"
        },
        {
          "display": "Grenache",
          "value": "Grenache"
        },
        {
          "display": "Kaskaskia Concord",
          "value": "Kaskaskia Concord"
        },
        {
          "display": "Madeira",
          "value": "Madeira"
        },
        {
          "display": "Malbec",
          "value": "Malbec"
        },
        {
          "display": "Marsala",
          "value": "Marsala"
        },
        {
          "display": "Merlot",
          "value": "Merlot"
        },
        {
          "display": "Muscat",
          "value": "Muscat"
        },
        {
          "display": "Pinot Grigio",
          "value": "Pinot Grigio"
        },
        {
          "display": "Pinot Gris",
          "value": "Pinot Gris"
        },
        {
          "display": "Pinot Noir",
          "value": "Pinot Noir"
        },
        {
          "display": "Port",
          "value": "Port"
        },
        {
          "display": "Pouilly-Fuisse",
          "value": "Pouilly-Fuisse"
        },
        {
          "display": "Prosecco",
          "value": "Prosecco"
        },
        {
          "display": "Riesling",
          "value": "Riesling"
        },
        {
          "display": "Sangiovese",
          "value": "Sangiovese"
        },
        {
          "display": "Sauvignon Blanc",
          "value": "Sauvignon Blanc"
        },
        {
          "display": "Semillon",
          "value": "Semillon"
        },
        {
          "display": "Sherry",
          "value": "Sherry"
        },
        {
          "display": "Syrah",
          "value": "Syrah"
        },
        {
          "display": "Shiraz",
          "value": "Shiraz"
        },
        {
          "display": "Tempranillo",
          "value": "Tempranillo"
        },
        {
          "display": "Vermouth",
          "value": "Vermouth"
        },
        {
          "display": "Viognier",
          "value": "Viognier"
        },
        {
          "display": "Vins doux naturels",
          "value": "Vins doux naturels"
        },
        {
          "display": "Zinfandel",
          "value": "Zinfandel"
        },
        {
          "display": "Bourbon",
          "value": "Bourbon"
        },
        {
          "display": "Brandy",
          "value": "Brandy"
        },
        {
          "display": "Gin",
          "value": "Gin"
        },
        {
          "display": "Rum",
          "value": "Rum"
        },
        {
          "display": "Scotch",
          "value": "Scotch"
        },
        {
          "display": "Tequila",
          "value": "Tequila"
        },
        {
          "display": "Vodka",
          "value": "Vodka"
        },
        {
          "display": "Whiskey",
          "value": "Whiskey"
        },
        {
          "display": "Schnapps",
          "value": "Schnapps"
        },
        {
          "display": "Non-Alcoholic",
          "value": "Non-Alcoholic"
        }
      ]
    },
    "description": "What is the name of this alcoholic beverage?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_beverage_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        2
      ],
      "synonym": [],
      "name": [
        "Alcoholic Beverage Name"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the paperwork for this vehicle.",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Vehicle Paperwork Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "28",
          "value": "28"
        },
        {
          "display": "30",
          "value": "30"
        },
        {
          "display": "31",
          "value": "31"
        },
        {
          "display": "32",
          "value": "32"
        },
        {
          "display": "33",
          "value": "33"
        },
        {
          "display": "34",
          "value": "34"
        },
        {
          "display": "35",
          "value": "35"
        },
        {
          "display": "36",
          "value": "36"
        },
        {
          "display": "37",
          "value": "37"
        },
        {
          "display": "38",
          "value": "38"
        },
        {
          "display": "40",
          "value": "40"
        },
        {
          "display": "42",
          "value": "42"
        },
        {
          "display": "44",
          "value": "44"
        }
      ]
    },
    "description": "What is your waist size?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_men_waist_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Waist Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Enter the details of the information you are tracking.",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_value",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Value"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person have an unusual vaginal discharge?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaginal_discharge",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Vaginal Discharge"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this pet's vaccinations.",
    "profile_template": {
      "multi": "true",
      "id": "0047",
      "name": "Pet Vaccinations",
      "image_name": "pet_vaccinations.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaccination_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Vaccination Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet Vaccinations"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the upload speed on this Wi-Fi network?",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_upload_speed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Upload Speed"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this person's trusted traveler info.",
    "profile_template": {
      "multi": "true",
      "id": "0183",
      "name": "Trusted Traveler",
      "image_name": "trusted_traveler.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trusted_traveler_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Trusted Traveler Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Trusted Traveler"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Beer",
          "value": "Beer"
        },
        {
          "display": "Wine",
          "value": "Wine"
        },
        {
          "display": "Liquor",
          "value": "Liquor"
        }
      ]
    },
    "description": "What type of alcohol is typically consumed?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "type_of_alcohol",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Type of Alcohol"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to travel?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_travel",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Travel"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "TransUnion Customer Service Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_score_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "TransUnion Score Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "TransUnion Customer Service Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "TransUnion Customer Service Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where was the test or assessment completed?",
    "profile_template": {
      "multi": "true",
      "id": "0181",
      "name": "Test Scores",
      "image_name": "testscore.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "testscore_test_location",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Testing Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Test Scores"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the strength for this person's reading glasses?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vision_strength",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Strength"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Are the patient's teeth sensitive to hot, cold, sweets or pressure?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "teeth_sensitivity",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Teeth Sensitivity"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was the medication stopped?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_stop_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Stop Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Enter any additional notes about the statement details.",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "statement_detail_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Statement Detail Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was the medication started?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_start_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Start Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_start_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Start Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for the security dispatch?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "20",
          "value": "20"
        },
        {
          "display": "0P",
          "value": "0P"
        },
        {
          "display": "2P",
          "value": "2P"
        },
        {
          "display": "4P",
          "value": "4P"
        },
        {
          "display": "6P",
          "value": "6P"
        },
        {
          "display": "8P",
          "value": "8P"
        },
        {
          "display": "10P",
          "value": "10P"
        },
        {
          "display": "12P",
          "value": "12P"
        },
        {
          "display": "14P",
          "value": "14P"
        },
        {
          "display": "12W",
          "value": "12W"
        },
        {
          "display": "14W",
          "value": "14W"
        },
        {
          "display": "16W",
          "value": "16W"
        },
        {
          "display": "18W",
          "value": "18W"
        },
        {
          "display": "20W",
          "value": "20W"
        },
        {
          "display": "22W",
          "value": "22W"
        },
        {
          "display": "24W",
          "value": "24W"
        },
        {
          "display": "28W",
          "value": "28W"
        },
        {
          "display": "30W",
          "value": "30W"
        },
        {
          "display": "32W",
          "value": "32W"
        },
        {
          "display": "XXS",
          "value": "XXS"
        },
        {
          "display": "XS",
          "value": "XS"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your skirt size?",
    "profile_template": {
      "multi": "true",
      "id": "0172",
      "name": "Women's Clothing Size",
      "image_name": "womensclothing.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_skirt_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Skirt Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional information to describe this routine.",
    "profile_template": {
      "multi": "true",
      "id": "0055",
      "name": "Routine",
      "image_name": "routine.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "routine_description",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Routine Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Routine"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person regularly wear a seatbelt?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "seatbelt_use",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Seatbelt Use"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What riders, if any, are there on this policy?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "riders",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Riders"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the residency requirements for this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_residency_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Residency Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "repayment_begin_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Repayment Begin Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "repayment_begin_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Repayment Begin Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the loan repayment period begin?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "repayment_begin_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Repayment Begin Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address for your renter's insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_insurance_company_website",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Renter's Insurance Company Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the pupillary distance measurement?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "pupillary_distance_pd",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Pupillary Distance (PD)"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the product or thing here.",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_item_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Product/Thing Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many previous miscarriages has this person had?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_miscarriages",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Previous Miscarriages"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Rose",
          "value": "Rose"
        },
        {
          "display": "Champagne / Sparkling",
          "value": "Champagne / Sparkling"
        },
        {
          "display": "Dessert",
          "value": "Dessert"
        },
        {
          "display": "Don't drink wine",
          "value": "Don't drink wine"
        }
      ]
    },
    "description": "What types of wine do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_preferred_wine_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Preferred Wine Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Pasta",
          "value": "Pasta"
        },
        {
          "display": "Potatoes",
          "value": "Potatoes"
        },
        {
          "display": "Rice",
          "value": "Rice"
        },
        {
          "display": "Quinoa",
          "value": "Quinoa"
        },
        {
          "display": "Cous Cous",
          "value": "Cous Cous"
        }
      ]
    },
    "description": "What types of starches do you like to eat?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_preferred_starches",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Preferred Starches"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Similac",
          "value": "Similac"
        },
        {
          "display": "Enfamil",
          "value": "Enfamil"
        },
        {
          "display": "Carnation",
          "value": "Carnation"
        },
        {
          "display": "Target brand",
          "value": "Target brand"
        },
        {
          "display": "WalMart brand",
          "value": "WalMart brand"
        }
      ]
    },
    "description": "What is your preferred formula?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_preferred_formula",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Preferred Formula"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_in_effect.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy in Effect Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_policy_in_effect.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy in Effect Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_expiration.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy Expiration Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_policy_in_effect.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy in Effect Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_expiration.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy Expiration Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does the renter's insurance policy expire?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_expiration",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Policy Expiration"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's plan ID?",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_plan_id",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Plan ID"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Police District Phone Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Were there photos taken at the scene of the accident?",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "photos_taken",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Photos Taken"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Phone Number on Account Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Phone Number on Account Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Phone Number on Account Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Phone Number on Account First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number associated with the account?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Phone Number on Account"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Has this pet been spayed or neutered?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_spayed_neutered",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Pet Spayed/Neutered"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What's the pet's personality? Are they social with new people? Or, is your pet sometimes a grouch?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_personality",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Pet Personality"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much personal property coverage does this policy include?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "renters_personal_property_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Personal Property Coverage"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the personal injury coverage for work loss claims?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "personal_injury_protection_work_loss",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Personal Injury Protection - Work Loss"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where was this surgery performed?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_performed_at",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Performed At"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the yearly out of pocket maximum?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insu_out_of_pocket_maximum",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Out of Pocket Maximum"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Has this person's ovaries been removed?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "ovaries_removed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Ovaries Removed"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Other",
          "value": "Other"
        },
        {
          "display": "2016",
          "value": "2016"
        },
        {
          "display": "2015",
          "value": "2015"
        },
        {
          "display": "2014",
          "value": "2014"
        },
        {
          "display": "2013",
          "value": "2013"
        },
        {
          "display": "2012",
          "value": "2012"
        },
        {
          "display": "2011",
          "value": "2011"
        },
        {
          "display": "2010",
          "value": "2010"
        },
        {
          "display": "2009",
          "value": "2009"
        },
        {
          "display": "2008",
          "value": "2008"
        },
        {
          "display": "2007",
          "value": "2007"
        },
        {
          "display": "2006",
          "value": "2006"
        },
        {
          "display": "2005",
          "value": "2005"
        },
        {
          "display": "2004",
          "value": "2004"
        },
        {
          "display": "2003",
          "value": "2003"
        },
        {
          "display": "2002",
          "value": "2002"
        },
        {
          "display": "2001",
          "value": "2001"
        },
        {
          "display": "2000",
          "value": "2000"
        },
        {
          "display": "1999",
          "value": "1999"
        },
        {
          "display": "1998",
          "value": "1998"
        },
        {
          "display": "1997",
          "value": "1997"
        },
        {
          "display": "1996",
          "value": "1996"
        },
        {
          "display": "1995",
          "value": "1995"
        },
        {
          "display": "1994",
          "value": "1994"
        },
        {
          "display": "1993",
          "value": "1993"
        },
        {
          "display": "1992",
          "value": "1992"
        },
        {
          "display": "1991",
          "value": "1991"
        },
        {
          "display": "1990",
          "value": "1990"
        },
        {
          "display": "1989",
          "value": "1989"
        },
        {
          "display": "1988",
          "value": "1988"
        },
        {
          "display": "1987",
          "value": "1987"
        },
        {
          "display": "1986",
          "value": "1986"
        },
        {
          "display": "1985",
          "value": "1985"
        },
        {
          "display": "1984",
          "value": "1984"
        },
        {
          "display": "1983",
          "value": "1983"
        },
        {
          "display": "1982",
          "value": "1982"
        },
        {
          "display": "1981",
          "value": "1981"
        },
        {
          "display": "1980",
          "value": "1980"
        },
        {
          "display": "1979",
          "value": "1979"
        },
        {
          "display": "1978",
          "value": "1978"
        },
        {
          "display": "1977",
          "value": "1977"
        },
        {
          "display": "1976",
          "value": "1976"
        },
        {
          "display": "1975",
          "value": "1975"
        },
        {
          "display": "1974",
          "value": "1974"
        },
        {
          "display": "1973",
          "value": "1973"
        },
        {
          "display": "1972",
          "value": "1972"
        },
        {
          "display": "1971",
          "value": "1971"
        },
        {
          "display": "1970",
          "value": "1970"
        },
        {
          "display": "1969",
          "value": "1969"
        },
        {
          "display": "1968",
          "value": "1968"
        },
        {
          "display": "1967",
          "value": "1967"
        },
        {
          "display": "1966",
          "value": "1966"
        },
        {
          "display": "1965",
          "value": "1965"
        },
        {
          "display": "1964",
          "value": "1964"
        },
        {
          "display": "1963",
          "value": "1963"
        },
        {
          "display": "1962",
          "value": "1962"
        },
        {
          "display": "1961",
          "value": "1961"
        },
        {
          "display": "1960",
          "value": "1960"
        },
        {
          "display": "1959",
          "value": "1959"
        },
        {
          "display": "1958",
          "value": "1958"
        },
        {
          "display": "1957",
          "value": "1957"
        },
        {
          "display": "1956",
          "value": "1956"
        },
        {
          "display": "1955",
          "value": "1955"
        },
        {
          "display": "1954",
          "value": "1954"
        },
        {
          "display": "1953",
          "value": "1953"
        },
        {
          "display": "1952",
          "value": "1952"
        },
        {
          "display": "1951",
          "value": "1951"
        },
        {
          "display": "1950",
          "value": "1950"
        },
        {
          "display": "1949",
          "value": "1949"
        },
        {
          "display": "1948",
          "value": "1948"
        },
        {
          "display": "1947",
          "value": "1947"
        },
        {
          "display": "1946",
          "value": "1946"
        },
        {
          "display": "1945",
          "value": "1945"
        },
        {
          "display": "1944",
          "value": "1944"
        },
        {
          "display": "1943",
          "value": "1943"
        },
        {
          "display": "1942",
          "value": "1942"
        },
        {
          "display": "1941",
          "value": "1941"
        },
        {
          "display": "1940",
          "value": "1940"
        },
        {
          "display": "1939",
          "value": "1939"
        },
        {
          "display": "1938",
          "value": "1938"
        },
        {
          "display": "1937",
          "value": "1937"
        },
        {
          "display": "1936",
          "value": "1936"
        },
        {
          "display": "1935",
          "value": "1935"
        },
        {
          "display": "1934",
          "value": "1934"
        },
        {
          "display": "1933",
          "value": "1933"
        },
        {
          "display": "1932",
          "value": "1932"
        },
        {
          "display": "1931",
          "value": "1931"
        },
        {
          "display": "1930",
          "value": "1930"
        },
        {
          "display": "1929",
          "value": "1929"
        },
        {
          "display": "1928",
          "value": "1928"
        },
        {
          "display": "1927",
          "value": "1927"
        },
        {
          "display": "1926",
          "value": "1926"
        },
        {
          "display": "1925",
          "value": "1925"
        },
        {
          "display": "1924",
          "value": "1924"
        },
        {
          "display": "1923",
          "value": "1923"
        },
        {
          "display": "1922",
          "value": "1922"
        },
        {
          "display": "1921",
          "value": "1921"
        },
        {
          "display": "1920",
          "value": "1920"
        },
        {
          "display": "1919",
          "value": "1919"
        },
        {
          "display": "1918",
          "value": "1918"
        },
        {
          "display": "1917",
          "value": "1917"
        },
        {
          "display": "1916",
          "value": "1916"
        },
        {
          "display": "1915",
          "value": "1915"
        },
        {
          "display": "1914",
          "value": "1914"
        },
        {
          "display": "1913",
          "value": "1913"
        },
        {
          "display": "1912",
          "value": "1912"
        },
        {
          "display": "1911",
          "value": "1911"
        },
        {
          "display": "1910",
          "value": "1910"
        },
        {
          "display": "1909",
          "value": "1909"
        },
        {
          "display": "1908",
          "value": "1908"
        },
        {
          "display": "1907",
          "value": "1907"
        },
        {
          "display": "1906",
          "value": "1906"
        },
        {
          "display": "1905",
          "value": "1905"
        },
        {
          "display": "1904",
          "value": "1904"
        },
        {
          "display": "1903",
          "value": "1903"
        },
        {
          "display": "1902",
          "value": "1902"
        },
        {
          "display": "1901",
          "value": "1901"
        }
      ]
    },
    "description": "What year is this revenue & income amount for?",
    "profile_template": {
      "multi": "true",
      "id": "0161",
      "name": "Revenue & Income",
      "image_name": "revenue_income.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "company_detail_revenue_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Revenue Year"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Revenue & Income"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Leggings",
          "value": "Leggings"
        },
        {
          "display": "Jeans",
          "value": "Jeans"
        },
        {
          "display": "Cargo Pants",
          "value": "Cargo Pants"
        },
        {
          "display": "Capri",
          "value": "Capri"
        },
        {
          "display": "Dress Pants",
          "value": "Dress Pants"
        },
        {
          "display": "Casual Pants",
          "value": "Casual Pants"
        },
        {
          "display": "Khakis",
          "value": "Khakis"
        }
      ]
    },
    "description": "What style of pants to you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pant_style",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Pant Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this vehicle's insurance policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Other Vehicle's Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What company insures this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_insurance_company",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Other Vehicle's Insurance Company"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this vehicle's participation in the accident.",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the make of this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicle_make",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Other Vehicle Make"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What options does your motorcycle have?",
    "profile_template": {
      "multi": "true",
      "id": "0069",
      "name": "Motorcycle",
      "image_name": "motorcycle.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "motorcycle_options",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Options"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Motorcycle"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't know",
          "value": "Don't know"
        }
      ]
    },
    "description": "Is the person on this license an organ donor?",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "organ_donar",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Organ Donor"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about the company network?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "networking_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Networking Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "6m",
          "value": "6m"
        },
        {
          "display": "12m",
          "value": "12m"
        },
        {
          "display": "18m",
          "value": "18m"
        },
        {
          "display": "2T",
          "value": "2T"
        },
        {
          "display": "3T",
          "value": "3T"
        },
        {
          "display": "4T",
          "value": "4T"
        },
        {
          "display": "5T",
          "value": "5T"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "4X",
          "value": "4X"
        },
        {
          "display": "5X",
          "value": "5X"
        },
        {
          "display": "6X",
          "value": "6X"
        },
        {
          "display": "7X",
          "value": "7X"
        },
        {
          "display": "8X",
          "value": "8X"
        },
        {
          "display": "9X",
          "value": "9X"
        },
        {
          "display": "10X",
          "value": "10X"
        },
        {
          "display": "11X",
          "value": "11X"
        },
        {
          "display": "12X",
          "value": "12X"
        },
        {
          "display": "13X",
          "value": "13X"
        },
        {
          "display": "14X",
          "value": "14X"
        },
        {
          "display": "15X",
          "value": "15X"
        },
        {
          "display": "16X",
          "value": "16X"
        },
        {
          "display": "4H",
          "value": "4H"
        },
        {
          "display": "6H",
          "value": "6H"
        },
        {
          "display": "8H",
          "value": "8H"
        },
        {
          "display": "10H",
          "value": "10H"
        },
        {
          "display": "12H",
          "value": "12H"
        },
        {
          "display": "14H",
          "value": "14H"
        },
        {
          "display": "16H",
          "value": "16H"
        },
        {
          "display": "18H",
          "value": "18H"
        },
        {
          "display": "20H",
          "value": "20H"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your child's pant size?",
    "profile_template": {
      "multi": "true",
      "id": "0174",
      "name": "Kid's Clothing Size",
      "image_name": "boys-and-girls-clothing-pref.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_girls_pants_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Pants Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0037",
      "name": "Address",
      "image_name": "mypreviousaddress.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_address_move_out_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Move Out Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Address"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient have mouth odors/bad taste?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "mouth_odors_bad_taste",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Mouth Odors/Bad Taste"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient mouth breathe while awake or asleep?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "mouth_breathing",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Mouth Breathing"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "initial": {
          "mask": "",
          "display_name": "Initial",
          "id": "initial"
        },
        "full": {
          "mask": "",
          "display_name": "Full",
          "id": "full"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "full"
      }
    },
    "description": "What is the middle name as it appears on the passport?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "middle_name_on_passport",
    "metadata": {
      "alias": [
        "passportMiddleName"
      ],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Middle Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's member ID?",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_member_id",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Member ID"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much medical coverage does this policy include?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "renters_medical_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Medical Coverage"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Cable",
          "value": "Cable"
        },
        {
          "display": "U-Lock",
          "value": "U-Lock"
        },
        {
          "display": "O-Lock",
          "value": "O-Lock"
        },
        {
          "display": "Chain",
          "value": "Chain"
        },
        {
          "display": "Pad",
          "value": "Pad"
        }
      ]
    },
    "description": "What style of lock is this?",
    "profile_template": {
      "multi": "true",
      "id": "0117",
      "name": "Combination Locks",
      "image_name": "locks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bike_lock_style",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Lock Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Combination Locks"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the lock model?",
    "profile_template": {
      "multi": "true",
      "id": "0117",
      "name": "Combination Locks",
      "image_name": "locks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bike_lock_model",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Lock Model"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Combination Locks"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What brand of lock is this?",
    "profile_template": {
      "multi": "true",
      "id": "0117",
      "name": "Combination Locks",
      "image_name": "locks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "bike_lock_brand",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Lock Brand"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Combination Locks"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many living children does/has this person had?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "living_children",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Living Children"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this life insurance.",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_insurance_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Life Insurance Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the website address for this life insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_insurance_company_website",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Life Insurance Company Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Beige",
          "value": "Beige"
        },
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Blue",
          "value": "Blue"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Green",
          "value": "Green"
        },
        {
          "display": "Grey",
          "value": "Grey"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Pink",
          "value": "Pink"
        },
        {
          "display": "Purple",
          "value": "Purple"
        },
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Yellow",
          "value": "Yellow"
        }
      ]
    },
    "description": "What basic colors don't you like?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "least_favorite_clothing_colors",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Least Favorite Clothing Colors"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the patient's last visit?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "last_visit",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Visit"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last STD screening?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_sexually_transmitted_disease_test",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Sexually Transmitted Disease Test"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "last_partial_x_ray.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Partial X-Ray Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the last name on the card?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_name_on_card",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Name on Card"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What is the last name as it appears on the passport?",
    "profile_template": {
      "multi": "true",
      "id": "0033",
      "name": "Passport",
      "image_name": "mypassport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_name_on_passport",
    "metadata": {
      "alias": [
        "passportLastName"
      ],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Passport"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last hearing test?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_hearing_test",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Hearing Test"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last healthy check-up?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_healthy_check_up",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Healthy Check-Up"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive their last abdominal aortic aneurysm test?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "last_abdominal_aortic_aneurysm_screen",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Abdominal Aortic Aneurysm Screen"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the last full x-ray?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "last_full_x_ray",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Full X-Ray"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was the last cleaning?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "last_cleaning",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Last Cleaning"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your girls clothing preferences.",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_clothing_preferences_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Kid's Clothing Preferences Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your girls clothing basics.",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Kid's Clothing Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Boy",
          "value": "Boy"
        },
        {
          "display": "Girl",
          "value": "Girl"
        },
        {
          "display": "Child",
          "value": "Child"
        },
        {
          "display": "Toddler (1-5yr)",
          "value": "Toddler (1-5yr)"
        },
        {
          "display": "Infant (0-24m)",
          "value": "Infant (0-24m)"
        }
      ]
    },
    "description": "Who is this size record for?",
    "profile_template": {
      "multi": "true",
      "id": "0174",
      "name": "Kid's Clothing Size",
      "image_name": "boys-and-girls-clothing-pref.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_kids_clothing_preference_category",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Kid's Clothing Size Category"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Share more specifics about this particular investment account.",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "key_equities_or_financial_instruments",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Key Equities or Financial Instruments"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What was the total net worth of investments?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_investments",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Investments"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Light",
          "value": "Light"
        },
        {
          "display": "Stone Wash",
          "value": "Stone Wash"
        },
        {
          "display": "Distressed",
          "value": "Distressed"
        },
        {
          "display": "Vintage",
          "value": "Vintage"
        },
        {
          "display": "Medium",
          "value": "Medium"
        },
        {
          "display": "Dark",
          "value": "Dark"
        },
        {
          "display": "Black",
          "value": "Black"
        }
      ]
    },
    "description": "Which denim washes do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_jeans_wash",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Jeans Wash"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your insurance claim information.",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "insurance_claim_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Insurance Claim Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Was hospitalization required after this surgery?",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_hospitalization",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Hospitalization"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your home insurance.",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_insurance_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Home Insurance Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient have a family history of extensive decay?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "history_of_decay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "History of Decay"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Enter any additional notes about this person's glasses.",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "visio_glasses_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Glasses Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to focus on a hobby?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_hobby",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Hobby"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the amount remaining to be paid out?",
    "profile_template": {
      "multi": "true",
      "id": "0176",
      "name": "Grant",
      "image_name": "grant.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "grant_amount_remaining",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Grant Amount Remaining"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Grant"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to remain healthy and active?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_health_wellness",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Health & Wellness"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0147",
      "name": "Products & Things",
      "image_name": "item.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "parts_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Products & Things"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0178",
      "name": "Education",
      "image_name": "education.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Education"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0137",
      "name": "Wi-Fi",
      "image_name": "wifi.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "wi_fi_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Wi-Fi"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0012",
      "name": "Driver's License",
      "image_name": "mydriverslicense.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "drivers_license_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Driver's License"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0171",
      "name": "Birthday",
      "image_name": "birthday.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birthday_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birthday"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_gem_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0149",
      "name": "Value",
      "image_name": "value.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_value_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Value"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "This gem will be saved as this name.",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_account_nickname",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Gem Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Formula",
          "value": "Formula"
        },
        {
          "display": "Breast Milk",
          "value": "Breast Milk"
        },
        {
          "display": "Both",
          "value": "Both"
        },
        {
          "display": "Neither",
          "value": "Neither"
        }
      ]
    },
    "description": "Does this child drink formula or breast milk?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_formula_or_breast_milk",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Formula or Breast Milk"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes on your food preferences.",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Food Preference Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Daily",
          "value": "Daily"
        },
        {
          "display": "Weekly",
          "value": "Weekly"
        },
        {
          "display": "Not too often",
          "value": "Not too often"
        },
        {
          "display": "Never",
          "value": "Never"
        }
      ]
    },
    "description": "Does this person regularly floss their teeth?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "floss_habits",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Floss Habits"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the first name on the card?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "first_name_on_card",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "First Name on Card"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "None",
          "value": "0"
        },
        {
          "display": "Don't know or indifferent",
          "value": "1"
        },
        {
          "display": "Not adventurous at all",
          "value": "2"
        },
        {
          "display": "Somewhat adventurous",
          "value": "3"
        },
        {
          "display": "Very adventurous",
          "value": "4"
        }
      ]
    },
    "description": "How adventurous of an eater are you?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_food_adventurousness",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Food Adventurousness"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string"
    },
    "description": "What first name do you prefer to go by?",
    "profile_template": {
      "multi": "true",
      "id": "0144",
      "name": "Personal Profile",
      "image_name": "personalme.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "identity_first_name",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "First Name"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personal Profile"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Explain to others how to pronounce your first name.",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "preferred_first_name_pronunciation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "First Name Pronunciation"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the financial requirements?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_financial_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Financial Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many fireplaces does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fireplace",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Fireplace"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is this person afraid of?",
    "profile_template": {
      "multi": "true",
      "id": "0052",
      "name": "Personality",
      "image_name": "personality.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "childs_fears",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Fears"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Personality"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Single",
          "value": "Single"
        },
        {
          "display": "Head of Household",
          "value": "Head of Household"
        },
        {
          "display": "Married Filing Jointly",
          "value": "Married Filing Jointly"
        },
        {
          "display": "Married Filing Separately",
          "value": "Married Filing Separately"
        },
        {
          "display": "Qualifying Widow/Widower with Dependent Child",
          "value": "Qualifying Widow/Widower with Dependent Child"
        }
      ]
    },
    "description": "What filing status was this tax return submitted with?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "filing_status",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Filing Status"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "fax_number_for_support.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Fax Number for Support First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are your favorite cuisines?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "favorite_cuisines",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Favorite Cuisines"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are this child’s favorite drinks?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_favorite_drinks",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Favorite Drinks"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Beige",
          "value": "Beige"
        },
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Blue",
          "value": "Blue"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Green",
          "value": "Green"
        },
        {
          "display": "Grey",
          "value": "Grey"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Pink",
          "value": "Pink"
        },
        {
          "display": "Purple",
          "value": "Purple"
        },
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Yellow",
          "value": "Yellow"
        }
      ]
    },
    "description": "What basic colors do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "favorite_clothing_colors",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Favorite Clothing Colors"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to be able to see your grandchildren and children?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_family_visits",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Family Visits"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the extended warranty provider?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "extended_warranty_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Extended Warranty Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to move closer to family?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_family_relocation",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Family Relocation"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Artichokes",
          "value": "Artichokes"
        },
        {
          "display": "Asparagus",
          "value": "Asparagus"
        },
        {
          "display": "Beets",
          "value": "Beets"
        },
        {
          "display": "Red Bell Peppers",
          "value": "Red Bell Peppers"
        },
        {
          "display": "Yellow Bell Peppers",
          "value": "Yellow Bell Peppers"
        },
        {
          "display": "Orange Bell Peppers",
          "value": "Orange Bell Peppers"
        },
        {
          "display": "Green Bell Peppers",
          "value": "Green Bell Peppers"
        },
        {
          "display": "Broccoli",
          "value": "Broccoli"
        },
        {
          "display": "Brussel Sprouts",
          "value": "Brussel Sprouts"
        },
        {
          "display": "Cabbage",
          "value": "Cabbage"
        },
        {
          "display": "Carrots",
          "value": "Carrots"
        },
        {
          "display": "Cauliflower",
          "value": "Cauliflower"
        },
        {
          "display": "Chile Peppers",
          "value": "Chile Peppers"
        },
        {
          "display": "Corn",
          "value": "Corn"
        },
        {
          "display": "Cucumbers",
          "value": "Cucumbers"
        },
        {
          "display": "Eggplant",
          "value": "Eggplant"
        },
        {
          "display": "Fennel",
          "value": "Fennel"
        },
        {
          "display": "Fresh Beans",
          "value": "Fresh Beans"
        },
        {
          "display": "Garlic",
          "value": "Garlic"
        },
        {
          "display": "Leafy Greens",
          "value": "Leafy Greens"
        },
        {
          "display": "Leeks",
          "value": "Leeks"
        },
        {
          "display": "Mushrooms",
          "value": "Mushrooms"
        },
        {
          "display": "Okra",
          "value": "Okra"
        },
        {
          "display": "Onions, Shallots",
          "value": "Onions, Shallots"
        },
        {
          "display": "Parsnips",
          "value": "Parsnips"
        },
        {
          "display": "Peas",
          "value": "Peas"
        },
        {
          "display": "Potatoes",
          "value": "Potatoes"
        },
        {
          "display": "Pumpkins",
          "value": "Pumpkins"
        },
        {
          "display": "Radishes",
          "value": "Radishes"
        },
        {
          "display": "Summer Squash",
          "value": "Summer Squash"
        },
        {
          "display": "Sweet Potatoes, Yams",
          "value": "Sweet Potatoes, Yams"
        },
        {
          "display": "Turnips",
          "value": "Turnips"
        },
        {
          "display": "Winter Squash",
          "value": "Winter Squash"
        }
      ]
    },
    "description": "What vegetables do you like to eat?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_favorite_vegetables",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Favorite Vegetables"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the extended warranty number?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "extended_warranty_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Extended Warranty Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When does this card expire?",
    "profile_template": {
      "multi": "true",
      "id": "0182",
      "name": "DOD Common Access Card (CAC)",
      "image_name": "common_access_card.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "dadcac_expiration_date",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Expiration Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "DOD Common Access Card (CAC)"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "extended_warrranty_phone.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Extended Warranty Phone First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the Experian score?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "experian_score",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Experian Score"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "experian_customer_service.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Experian Customer Service Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "experian_customer_service.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Experian Customer Service Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many exemptions were claimed on this tax return?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tax_exemptions",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Exemptions"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What are the ethnicity/heritage requirements for this scholarship?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_ethnicity_heritage_requirement",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Ethnicity/Heritage Requirement"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the customer service phone number for Experian?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "experian_customer_service",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Experian Customer Service"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "equifax_customer_service.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Equifax Customer Service First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_end_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_end_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_end_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_end_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_end_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What was the total education credits claimed?",
    "profile_template": {
      "multi": "true",
      "id": "0177",
      "name": "Tax & Income",
      "image_name": "taxes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "education_credits",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Education Credits"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Tax & Income"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0020",
      "name": "Rental",
      "image_name": "rentalcar.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rental_end_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "End Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Rental"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is this used for?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "document_sharing_purpose",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Document Sharing Purpose"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "No special requests",
          "value": "No special requests"
        },
        {
          "display": "Low Calorie",
          "value": "Low Calorie"
        },
        {
          "display": "Low Carb",
          "value": "Low Carb"
        },
        {
          "display": "Low Fat",
          "value": "Low Fat"
        },
        {
          "display": "Low Sugar",
          "value": "Low Sugar"
        }
      ]
    },
    "description": "Are you currently on any of the following diets?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_diet",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Diet"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "0",
          "value": "0"
        },
        {
          "display": "1",
          "value": "1"
        },
        {
          "display": "2",
          "value": "2"
        },
        {
          "display": "3",
          "value": "3"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "9",
          "value": "9"
        },
        {
          "display": "10",
          "value": "10"
        }
      ]
    },
    "description": "How important is it to you to relocate to a smaller place?",
    "profile_template": {
      "multi": "true",
      "id": "0168",
      "name": "Retirement Preferences",
      "image_name": "retirement-preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "retirement_preferences_downsizing",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Downsizing"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Retirement Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient wear a denture(s) or partial denture(s)?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "dentures",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Dentures"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Has the patient had any dental implants placed?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "dental_implants",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Dental implants"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was the roof installed?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "date_roof_installed",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Date Roof Installed"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0152",
      "name": "Surgery",
      "image_name": "surgery.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "suegery_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Surgery"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_customer_service_phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Customer Service Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0148",
      "name": "Vehicle Paperwork",
      "image_name": "vehiclepaperwork.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vehicle_paperwork_date_issued.day",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Date Issued Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Vehicle Paperwork"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "6m",
          "value": "6m"
        },
        {
          "display": "12m",
          "value": "12m"
        },
        {
          "display": "18m",
          "value": "18m"
        },
        {
          "display": "2T",
          "value": "2T"
        },
        {
          "display": "3T",
          "value": "3T"
        },
        {
          "display": "4T",
          "value": "4T"
        },
        {
          "display": "5T",
          "value": "5T"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "4X",
          "value": "4X"
        },
        {
          "display": "5X",
          "value": "5X"
        },
        {
          "display": "6X",
          "value": "6X"
        },
        {
          "display": "7X",
          "value": "7X"
        },
        {
          "display": "8X",
          "value": "8X"
        },
        {
          "display": "9X",
          "value": "9X"
        },
        {
          "display": "10X",
          "value": "10X"
        },
        {
          "display": "11X",
          "value": "11X"
        },
        {
          "display": "12X",
          "value": "12X"
        },
        {
          "display": "13X",
          "value": "13X"
        },
        {
          "display": "14X",
          "value": "14X"
        },
        {
          "display": "15X",
          "value": "15X"
        },
        {
          "display": "16X",
          "value": "16X"
        },
        {
          "display": "4H",
          "value": "4H"
        },
        {
          "display": "6H",
          "value": "6H"
        },
        {
          "display": "8H",
          "value": "8H"
        },
        {
          "display": "10H",
          "value": "10H"
        },
        {
          "display": "12H",
          "value": "12H"
        },
        {
          "display": "14H",
          "value": "14H"
        },
        {
          "display": "16H",
          "value": "16H"
        },
        {
          "display": "18H",
          "value": "18H"
        },
        {
          "display": "20H",
          "value": "20H"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your child's dress size?",
    "profile_template": {
      "multi": "true",
      "id": "0174",
      "name": "Kid's Clothing Size",
      "image_name": "boys-and-girls-clothing-pref.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_girls_dress_size",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Dress Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Size"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Central Air",
          "value": "Central Air"
        },
        {
          "display": "Window Unit",
          "value": "Window Unit"
        },
        {
          "display": "None",
          "value": "None"
        }
      ]
    },
    "description": "What kind of cooling system does this home have?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "cooling_system",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Cooling System"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0058",
      "name": "Memberships & Rewards Programs",
      "image_name": "travelrewards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "travel_rewards_customer_service_phone_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Customer Service Phone Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Memberships & Rewards Programs"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number_for_account.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Number for Account Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number_for_account.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Number for Account First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number_for_account.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Number for Account Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "contact_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this person's contact lens.",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "contact_lens_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Lenses Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0184",
      "name": "Veteran Health Identification Card",
      "image_name": "veteran_health_id.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "veteran_contact_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Contact Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Veteran Health Identification Card"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Publicly Traded",
          "value": "Publicly Traded"
        },
        {
          "display": "Privately Held",
          "value": "Privately Held"
        }
      ]
    },
    "description": "Is this a publicly traded or a privately held company?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_company_status",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Company Status"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "What is the copay amount?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insu_co_pay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Co-Pay"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Short",
          "value": "Short"
        },
        {
          "display": "Mid-Thigh",
          "value": "Mid-Thigh"
        },
        {
          "display": "Dress Length (Long)",
          "value": "Dress Length (Long)"
        }
      ]
    },
    "description": "What length of coat do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "coat_lenght",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Coat Length"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the co-insurance ratio?",
    "profile_template": {
      "multi": "true",
      "id": "0084",
      "name": "Health Insurance",
      "image_name": "myhealthinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "health_insu_co_insurance",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Co-Insurance"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this person's HDL (good) cholesterol number?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "cholesterol_hdl",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Cholesterol - HDL"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Very Expensive",
          "value": "Very Expensive"
        },
        {
          "display": "Expensive",
          "value": "Expensive"
        },
        {
          "display": "Moderate",
          "value": "Moderate"
        },
        {
          "display": "Bargain",
          "value": "Bargain"
        },
        {
          "display": "Cheap",
          "value": "Cheap"
        },
        {
          "display": "Depends on the garment",
          "value": "Depends on the garment"
        }
      ]
    },
    "description": "What clothing qualities are most important to you?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_clothing_qualities",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Clothing Qualities"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Skinny",
          "value": "Skinny"
        },
        {
          "display": "Straight Leg",
          "value": "Straight Leg"
        },
        {
          "display": "Boot Cut",
          "value": "Boot Cut"
        },
        {
          "display": "Relaxed",
          "value": "Relaxed"
        },
        {
          "display": "Loose",
          "value": "Loose"
        }
      ]
    },
    "description": "What is your preferred pant fit?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_casual_pants_fit",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Casual Pants Fit"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Long-Sleeved Button Down",
          "value": "Long-Sleeved Button Down"
        },
        {
          "display": "Polo",
          "value": "Polo"
        },
        {
          "display": "Short-Sleeved Button Down",
          "value": "Short-Sleeved Button Down"
        },
        {
          "display": "T-Shirt",
          "value": "T-Shirt"
        }
      ]
    },
    "description": "What types of casual shirts do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_casual_shirt_preferences",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Casual Shirt Preferences"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "card_contact_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Card Contact Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "I believe in investing in high quality pieces that I will wear for years",
          "value": "I believe in investing in high quality pieces that I will wear for years"
        },
        {
          "display": "I'll buy some lower quality items if they are trendy",
          "value": "I'll buy some lower quality items if they are trendy"
        },
        {
          "display": "I buy most things on sale, but always find high quality items",
          "value": "I buy most things on sale, but always find high quality items"
        },
        {
          "display": "I have basics that I buy as inexpensively as possible each year",
          "value": "I have basics that I buy as inexpensively as possible each year"
        }
      ]
    },
    "description": "Do you have a philosophy when shopping?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "buying_philosophy",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Buying Philosophy"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about your preferred business attire.",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_business_attire_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Business Attire Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the brokerage company?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "brokerage_company",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Brokerage Company"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes on your beverage preferences.",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Beverage Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "For what academic year was this scholarship awarded?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_award_year",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Award Year"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is this account set up to auto-pay?",
    "profile_template": {
      "multi": "true",
      "id": "0040",
      "name": "Credit & Debit Card",
      "image_name": "mycreditcards.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "credit_card_auto_pay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Auto-Pay"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Credit & Debit Card"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Light Lager",
          "value": "Light Lager"
        },
        {
          "display": "American Lager",
          "value": "American Lager"
        },
        {
          "display": "Pilsner",
          "value": "Pilsner"
        },
        {
          "display": "Amber Lager",
          "value": "Amber Lager"
        },
        {
          "display": "Oktoberfest",
          "value": "Oktoberfest"
        },
        {
          "display": "Bock",
          "value": "Bock"
        },
        {
          "display": "Belgian Ale",
          "value": "Belgian Ale"
        },
        {
          "display": "American Wheat Ale",
          "value": "American Wheat Ale"
        },
        {
          "display": "Hefeweizen",
          "value": "Hefeweizen"
        },
        {
          "display": "Blonde or Cream Ale",
          "value": "Blonde or Cream Ale"
        },
        {
          "display": "Pale Ale",
          "value": "Pale Ale"
        },
        {
          "display": "India Pale Ale",
          "value": "India Pale Ale"
        },
        {
          "display": "Amber Ale",
          "value": "Amber Ale"
        },
        {
          "display": "Brown Ale",
          "value": "Brown Ale"
        },
        {
          "display": "Porter",
          "value": "Porter"
        },
        {
          "display": "Stout",
          "value": "Stout"
        },
        {
          "display": "Barley Wine",
          "value": "Barley Wine"
        },
        {
          "display": "Lambic",
          "value": "Lambic"
        },
        {
          "display": "Any",
          "value": "Any"
        },
        {
          "display": "Don't drink beer",
          "value": "Don't drink beer"
        }
      ]
    },
    "description": "What type of beer do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_beer_preferences",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Beer Preferences"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "How frequently is money automatically transferred into this account?",
    "profile_template": {
      "multi": "true",
      "id": "0043",
      "name": "Investment Account",
      "image_name": "mystocks.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "auto_transfer_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Auto Transfer Frequency"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Investment Account"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much is paid annually for this life insurance?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_annual_premium",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Annual Premium"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": "/api/v1/source/house_styles"
    },
    "description": "What style of construction is this home?",
    "profile_template": {
      "multi": "true",
      "id": "0019",
      "name": "Home",
      "image_name": "myhouse.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "architecture_style",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Architecture Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Home"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "32",
          "value": "32"
        },
        {
          "display": "33",
          "value": "33"
        },
        {
          "display": "34",
          "value": "34"
        },
        {
          "display": "35",
          "value": "35"
        },
        {
          "display": "36",
          "value": "36"
        },
        {
          "display": "37",
          "value": "37"
        }
      ]
    },
    "description": "What is your shirt arm length?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_men_arm_length",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Arm Length"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about your alarm.",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alarm_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Alarm Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Beer",
          "value": "Beer"
        },
        {
          "display": "Liquor",
          "value": "Liquor"
        },
        {
          "display": "Red Wine",
          "value": "Red Wine"
        },
        {
          "display": "White Wine",
          "value": "White Wine"
        },
        {
          "display": "Rose",
          "value": "Rose"
        },
        {
          "display": "Sparkling",
          "value": "Sparkling"
        }
      ]
    },
    "description": "What type of alcoholic beverage is this?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_beverage_type",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Alcoholic Beverage Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for your alarm company?",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alarm_company_phone_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Alarm Company Phone Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How old was this person when they had their first period?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "age_of_first_period",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Age of First Period"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "adjusters_phone.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Adjuster's Phone Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "adjusters_phone.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Adjuster's Phone Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0115",
      "name": "Vehicle Accident",
      "image_name": "caraccident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "adjusters_phone.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Adjuster's Phone Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "If the account is paid automatically each month, which account is debited?",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_debited_during_auto_pay",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Account Debited During Auto-Pay"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_contact_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Account Contact Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Once a year",
          "value": "Once a year"
        },
        {
          "display": "Several times a year",
          "value": "Several times a year"
        },
        {
          "display": "Once a month",
          "value": "Once a month"
        },
        {
          "display": "Several times a month",
          "value": "Several times a month"
        },
        {
          "display": "One time only",
          "value": "One time only"
        }
      ]
    },
    "description": "How frequently do you participate in activities for this charity?",
    "profile_template": {
      "multi": "true",
      "id": "0150",
      "name": "Charity",
      "image_name": "charity.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "charity_activity_frequency",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Activity Frequency"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Charity"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_contact_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Account Contact Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for support for this account?",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_contact_number",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Account Contact Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0042",
      "name": "Bank Account",
      "image_name": "mybankaccounts.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_contact_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [
        1
      ],
      "synonym": [],
      "name": [
        "Account Contact Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bank Account"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the phone number for this witness?",
    "profile_template": {
      "multi": "true",
      "id": "0118",
      "name": "Vehicle Accident Witnesses",
      "image_name": "vehicle_accident_witnesses.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "witness_phone",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Witness phone"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident Witnesses"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Casual",
          "value": "Casual"
        },
        {
          "display": "Business Casual",
          "value": "Business Casual"
        },
        {
          "display": "Business Attire",
          "value": "Business Attire"
        }
      ]
    },
    "description": "What is your dress code at work?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_dress_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Work Dress Code"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the address for this witness?",
    "profile_template": {
      "multi": "true",
      "id": "0118",
      "name": "Vehicle Accident Witnesses",
      "image_name": "vehicle_accident_witnesses.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "witness_address",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Witness address"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident Witnesses"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about this witness.",
    "profile_template": {
      "multi": "true",
      "id": "0118",
      "name": "Vehicle Accident Witnesses",
      "image_name": "vehicle_accident_witnesses.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "witness_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Witness Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicle Accident Witnesses"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.number",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the warranty contact phone number?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_phone",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Phone"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_expiration_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Expiration Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_expiration_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Expiration Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_expiration_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Expiration Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When does this warranty expire?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_expiration_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Warranty Expiration Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "High Waist",
          "value": "High Waist"
        },
        {
          "display": "At the Waist",
          "value": "At the Waist"
        },
        {
          "display": "Mid Rise",
          "value": "Mid Rise"
        },
        {
          "display": "Low Rise",
          "value": "Low Rise"
        }
      ]
    },
    "description": "What kind of rise do you prefer on your pants?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "waist_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Waist Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the right eye visual acuity measurement (20/XX)?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vision_right_eye",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vision Right Eye"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Hourly",
          "value": "Hourly"
        },
        {
          "display": "Salary",
          "value": "Salary"
        }
      ]
    },
    "description": "Is this a salary or hourly paid position?",
    "profile_template": {
      "multi": "true",
      "id": "0179",
      "name": "Work",
      "image_name": "work.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "work_wage",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Wage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Work"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the left eye visual acuity measurement (20/XX)?",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "vision_left_eye",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vision Left Eye"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Vegetarian",
          "value": "Vegetarian"
        },
        {
          "display": "Vegan",
          "value": "Vegan"
        },
        {
          "display": "Eat chicken and fish",
          "value": "Eat chicken and fish"
        },
        {
          "display": "Eat only chicken",
          "value": "Eat only chicken"
        },
        {
          "display": "Eat only fish",
          "value": "Eat only fish"
        }
      ]
    },
    "description": "Are you a vegetarian?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_vegetarian",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vegetarian"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What specific type/varietal is this?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_varietal",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Varietal"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the varicella vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "varicella_vaccine_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Varicella Vaccine Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When does this vaccination expire?",
    "profile_template": {
      "multi": "true",
      "id": "0047",
      "name": "Pet Vaccinations",
      "image_name": "pet_vaccinations.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaccination_expiration",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vaccination Expiration"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Pet Vaccinations"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When was this vaccination completed?",
    "profile_template": {
      "multi": "true",
      "id": "0047",
      "name": "Pet Vaccinations",
      "image_name": "pet_vaccinations.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaccination_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vaccination Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Pet Vaccinations"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any special instructions for accessing the VPN.",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vpn_access_instructions",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "VPN Access Instructions"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Rabies",
          "value": "Rabies"
        },
        {
          "display": "Parvo",
          "value": "Parvo"
        },
        {
          "display": "DHLP",
          "value": "DHLP"
        },
        {
          "display": "Bordatella",
          "value": "Bordatella"
        },
        {
          "display": "Feline Distemper",
          "value": "Feline Distemper"
        },
        {
          "display": "Feline Leukemia",
          "value": "Feline Leukemia"
        }
      ]
    },
    "description": "What vaccination was completed?",
    "profile_template": {
      "multi": "true",
      "id": "0047",
      "name": "Pet Vaccinations",
      "image_name": "pet_vaccinations.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaccination_type",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vaccination Type"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet Vaccinations"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the uninsured motorist coverage for bodily injury?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "uninsured_motorist_coverage_bodily_injury",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Uninsured Motorist Coverage - Bodily Injury"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Artichokes",
          "value": "Artichokes"
        },
        {
          "display": "Asparagus",
          "value": "Asparagus"
        },
        {
          "display": "Beets",
          "value": "Beets"
        },
        {
          "display": "Red Bell Peppers",
          "value": "Red Bell Peppers"
        },
        {
          "display": "Yellow Bell Peppers",
          "value": "Yellow Bell Peppers"
        },
        {
          "display": "Orange Bell Peppers",
          "value": "Orange Bell Peppers"
        },
        {
          "display": "Green Bell Peppers",
          "value": "Green Bell Peppers"
        },
        {
          "display": "Broccoli",
          "value": "Broccoli"
        },
        {
          "display": "Brussel Sprouts",
          "value": "Brussel Sprouts"
        },
        {
          "display": "Cabbage",
          "value": "Cabbage"
        },
        {
          "display": "Carrots",
          "value": "Carrots"
        },
        {
          "display": "Cauliflower",
          "value": "Cauliflower"
        },
        {
          "display": "Chile Peppers",
          "value": "Chile Peppers"
        },
        {
          "display": "Corn",
          "value": "Corn"
        },
        {
          "display": "Cucumbers",
          "value": "Cucumbers"
        },
        {
          "display": "Eggplant",
          "value": "Eggplant"
        },
        {
          "display": "Fennel",
          "value": "Fennel"
        },
        {
          "display": "Fresh Beans",
          "value": "Fresh Beans"
        },
        {
          "display": "Garlic",
          "value": "Garlic"
        },
        {
          "display": "Leafy Greens",
          "value": "Leafy Greens"
        },
        {
          "display": "Leeks",
          "value": "Leeks"
        },
        {
          "display": "Mushrooms",
          "value": "Mushrooms"
        },
        {
          "display": "Okra",
          "value": "Okra"
        },
        {
          "display": "Onions, Shallots",
          "value": "Onions, Shallots"
        },
        {
          "display": "Parsnips",
          "value": "Parsnips"
        },
        {
          "display": "Peas",
          "value": "Peas"
        },
        {
          "display": "Potatoes",
          "value": "Potatoes"
        },
        {
          "display": "Pumpkins",
          "value": "Pumpkins"
        },
        {
          "display": "Radishes",
          "value": "Radishes"
        },
        {
          "display": "Summer Squash",
          "value": "Summer Squash"
        },
        {
          "display": "Sweet Potatoes, Yams",
          "value": "Sweet Potatoes, Yams"
        },
        {
          "display": "Turnips",
          "value": "Turnips"
        },
        {
          "display": "Winter Squash",
          "value": "Winter Squash"
        }
      ]
    },
    "description": "Are there vegetables you dislike",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_vegetables_you_dislike",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Vegetables You Dislike"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person have unexplained vaginal bleeding?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "unexplained_vaginal_bleeding",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Unexplained Vaginal Bleeding"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Crew neck",
          "value": "Crew neck"
        },
        {
          "display": "V-Neck",
          "value": "V-Neck"
        },
        {
          "display": "Tank",
          "value": "Tank"
        },
        {
          "display": "Other",
          "value": "Other"
        }
      ]
    },
    "description": "What style of undershirt do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "undershirt_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Undershirt Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is your umbrella policy number?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "umbrella_policy_number",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Umbrella Policy Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "url"
    },
    "description": "What is the TransUnion website?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tran_union_website",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Website"
      ],
      "semantic_type": [
        "url"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Cigarettes",
          "value": "Cigarettes"
        },
        {
          "display": "Cigar",
          "value": "Cigar"
        },
        {
          "display": "Pipe",
          "value": "Pipe"
        },
        {
          "display": "Snuff",
          "value": "Snuff"
        },
        {
          "display": "Chew",
          "value": "Chew"
        }
      ]
    },
    "description": "What type of tobacco did/does this person use?",
    "profile_template": {
      "multi": "true",
      "id": "0086",
      "name": "Health Information",
      "image_name": "health-information.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "type_of_tobacco",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Type of Tobacco"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Health Information"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many tubal pregnancies has this person had?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tubal_pregnancies",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tubal Pregnancies"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_score_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Score Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_score_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Score Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the TransUnion score?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_score",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Score"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the most recent date when the TransUnion score was checked?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_score_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Score Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Customer Service First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Customer Service Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this tracker.",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_notes_field",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tracker Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "basic": {
          "mask": "%c %a %f %l",
          "display_name": "Basic",
          "id": "basic"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "basic"
      }
    },
    "description": "What is the customer service phone number for TransUnion?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Customer Service"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient have teeth/fillings break frequently?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "tooth_damage",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tooth Damage"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "trans_union_customer_service.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "TransUnion Customer Service Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the time of birth?",
    "profile_template": {
      "multi": "true",
      "id": "0134",
      "name": "Birth Certificate",
      "image_name": "birthcertificate.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "birth_certificate_time_of_birth",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Time of Birth"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Birth Certificate"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient have tired jaws, especially in the morning?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "tired_jaws",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tired Jaws"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "time"
    },
    "description": "What time did this happen?",
    "profile_template": {
      "multi": "true",
      "id": "0153",
      "name": "Tracker",
      "image_name": "tracker.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tracker_time",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Time"
      ],
      "semantic_type": [
        "time"
      ]
    },
    "pcategory": "Tracker"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the tetanus vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "tetanus_vaccine_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tetanus Vaccine Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Does the patient do treatments for tempormandibular disorders (also known as TMJ)?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "tempormandibular_treatments",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Tempormandibular Treatments"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Is the patient aware of any swelling or lumps?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "swelling_lumps",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Swelling/Lumps"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Turtlenecks",
          "value": "Turtlenecks"
        },
        {
          "display": "Crew Neck",
          "value": "Crew Neck"
        },
        {
          "display": "Scoop Neck",
          "value": "Scoop Neck"
        },
        {
          "display": "V-Neck",
          "value": "V-Neck"
        },
        {
          "display": "Boat Neck",
          "value": "Boat Neck"
        },
        {
          "display": "Cardigan",
          "value": "Cardigan"
        },
        {
          "display": "Hoodie",
          "value": "Hoodie"
        },
        {
          "display": "Coat-Sweater",
          "value": "Coat-Sweater"
        },
        {
          "display": "Preppy",
          "value": "Preppy"
        }
      ]
    },
    "description": "What style sweater do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "sweaters_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Sweater Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What is the distribution date for the summer semester?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_summer_distribution_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Summer Distribution Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the distribution amount for the summer semester?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_summer_distribution_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Summer Distribution Amount"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many previous stillbirths has this person had?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "stilbirths",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Stilbirths"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Wool",
          "value": "Wool"
        },
        {
          "display": "Cotton",
          "value": "Cotton"
        },
        {
          "display": "Cotton-Silk Blend",
          "value": "Cotton-Silk Blend"
        },
        {
          "display": "Cotton-Lycra Blend",
          "value": "Cotton-Lycra Blend"
        },
        {
          "display": "Silk",
          "value": "Silk"
        },
        {
          "display": "Rayon",
          "value": "Rayon"
        },
        {
          "display": "Cashmere",
          "value": "Cashmere"
        },
        {
          "display": "Polyester Blend",
          "value": "Polyester Blend"
        }
      ]
    },
    "description": "What sweater fabrics do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "sweater_fabrics",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Sweater Fabrics"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "What is the distribution date for the spring semester?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_spring_distribution_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Spring Distribution Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the distribution amount for the spring semester?",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_spring_distribution_amount",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Spring Distribution Amount"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "None",
          "value": "0"
        },
        {
          "display": "Don't know or indifferent",
          "value": "1"
        },
        {
          "display": "Hate it",
          "value": "2"
        },
        {
          "display": "Dislike",
          "value": "3"
        },
        {
          "display": "Like it",
          "value": "4"
        },
        {
          "display": "Love it!",
          "value": "5"
        }
      ]
    },
    "description": "Do you like spicy foods?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_spiciness",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Spiciness"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Brandy",
          "value": "Brandy"
        },
        {
          "display": "Gin",
          "value": "Gin"
        },
        {
          "display": "Rum",
          "value": "Rum"
        },
        {
          "display": "Tequila",
          "value": "Tequila"
        },
        {
          "display": "Vodka",
          "value": "Vodka"
        },
        {
          "display": "Whiskey",
          "value": "Whiskey"
        },
        {
          "display": "Scotch",
          "value": "Scotch"
        },
        {
          "display": "Bourbon",
          "value": "Bourbon"
        },
        {
          "display": "Schnapps",
          "value": "Schnapps"
        },
        {
          "display": "No Preference",
          "value": "No Preference"
        },
        {
          "display": "Don't drink liquor",
          "value": "Don't drink liquor"
        }
      ]
    },
    "description": "What types of spirits do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_spirits_preferences",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Spirits Preferences"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Puréed Food",
          "value": "Puréed Food"
        },
        {
          "display": "Cereal",
          "value": "Cereal"
        },
        {
          "display": "Soft Foods",
          "value": "Soft Foods"
        },
        {
          "display": "None",
          "value": "None"
        }
      ]
    },
    "description": "Does this child eat solid foods?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_solid_food",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Solid Food"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "6m",
          "value": "6m"
        },
        {
          "display": "12m",
          "value": "12m"
        },
        {
          "display": "18m",
          "value": "18m"
        },
        {
          "display": "2T",
          "value": "2T"
        },
        {
          "display": "3T",
          "value": "3T"
        },
        {
          "display": "4T",
          "value": "4T"
        },
        {
          "display": "5T",
          "value": "5T"
        },
        {
          "display": "4",
          "value": "4"
        },
        {
          "display": "5",
          "value": "5"
        },
        {
          "display": "6",
          "value": "6"
        },
        {
          "display": "7",
          "value": "7"
        },
        {
          "display": "8",
          "value": "8"
        },
        {
          "display": "10",
          "value": "10"
        },
        {
          "display": "12",
          "value": "12"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "4X",
          "value": "4X"
        },
        {
          "display": "5X",
          "value": "5X"
        },
        {
          "display": "6X",
          "value": "6X"
        },
        {
          "display": "7X",
          "value": "7X"
        },
        {
          "display": "8X",
          "value": "8X"
        },
        {
          "display": "9X",
          "value": "9X"
        },
        {
          "display": "10X",
          "value": "10X"
        },
        {
          "display": "11X",
          "value": "11X"
        },
        {
          "display": "12X",
          "value": "12X"
        },
        {
          "display": "13X",
          "value": "13X"
        },
        {
          "display": "14X",
          "value": "14X"
        },
        {
          "display": "15X",
          "value": "15X"
        },
        {
          "display": "16X",
          "value": "16X"
        },
        {
          "display": "4H",
          "value": "4H"
        },
        {
          "display": "6H",
          "value": "6H"
        },
        {
          "display": "8H",
          "value": "8H"
        },
        {
          "display": "10H",
          "value": "10H"
        },
        {
          "display": "12H",
          "value": "12H"
        },
        {
          "display": "14H",
          "value": "14H"
        },
        {
          "display": "16H",
          "value": "16H"
        },
        {
          "display": "18H",
          "value": "18H"
        },
        {
          "display": "20H",
          "value": "20H"
        },
        {
          "display": "S",
          "value": "S"
        },
        {
          "display": "M",
          "value": "M"
        },
        {
          "display": "L",
          "value": "L"
        },
        {
          "display": "XL",
          "value": "XL"
        },
        {
          "display": "XXL",
          "value": "XXL"
        }
      ]
    },
    "description": "What is your child's sweater size?",
    "profile_template": {
      "multi": "true",
      "id": "0174",
      "name": "Kid's Clothing Size",
      "image_name": "boys-and-girls-clothing-pref.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_girls_sweater_size",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Sweater Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Size"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Tailored",
          "value": "Tailored"
        },
        {
          "display": "Form-Fitting",
          "value": "Form-Fitting"
        },
        {
          "display": "Tulip",
          "value": "Tulip"
        },
        {
          "display": "A-line",
          "value": "A-line"
        },
        {
          "display": "Full",
          "value": "Full"
        }
      ]
    },
    "description": "What style skirts do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "skirt_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Skirt Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Mini",
          "value": "Mini"
        },
        {
          "display": "Above the Knee",
          "value": "Above the Knee"
        },
        {
          "display": "Knee Length",
          "value": "Knee Length"
        },
        {
          "display": "Mid-Calf Length",
          "value": "Mid-Calf Length"
        },
        {
          "display": "Ankle Length",
          "value": "Ankle Length"
        }
      ]
    },
    "description": "What length of skirts do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "skirt_length",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Skirt Length"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What side effects did this person experience while taking this medication?",
    "profile_template": {
      "multi": "true",
      "id": "0151",
      "name": "Medications",
      "image_name": "medications.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "medication_side_effects",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Side Effects"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Medications"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What side effects, if any, were experienced?",
    "profile_template": {
      "multi": "true",
      "id": "0047",
      "name": "Pet Vaccinations",
      "image_name": "pet_vaccinations.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "vaccination_side_effects",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Side Effects"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet Vaccinations"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Four Pack",
          "value": "Four Pack"
        },
        {
          "display": "Six Pack",
          "value": "Six Pack"
        },
        {
          "display": "Case",
          "value": "Case"
        },
        {
          "display": "Large Format",
          "value": "Large Format"
        },
        {
          "display": "22oz Bottle",
          "value": "22oz Bottle"
        },
        {
          "display": "375mL Bottle",
          "value": "375mL Bottle"
        },
        {
          "display": "750mL Bottle",
          "value": "750mL Bottle"
        },
        {
          "display": "1L Bottle",
          "value": "1L Bottle"
        },
        {
          "display": "1.75L Bottle",
          "value": "1.75L Bottle"
        }
      ]
    },
    "description": "What is the bottle size or format for that price?",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_size",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Cargo",
          "value": "Cargo"
        },
        {
          "display": "Corduroy",
          "value": "Corduroy"
        },
        {
          "display": "Denim",
          "value": "Denim"
        },
        {
          "display": "Khaki",
          "value": "Khaki"
        },
        {
          "display": "I don't wear shorts.",
          "value": "I don't wear shorts."
        }
      ]
    },
    "description": "What types of shorts do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_shorts_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shorts Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Short",
          "value": "Short"
        },
        {
          "display": "Mid Thigh",
          "value": "Mid Thigh"
        },
        {
          "display": "Bermuda",
          "value": "Bermuda"
        },
        {
          "display": "Skort",
          "value": "Skort"
        },
        {
          "display": "Athletic",
          "value": "Athletic"
        },
        {
          "display": "Khakis",
          "value": "Khakis"
        },
        {
          "display": "Jean",
          "value": "Jean"
        },
        {
          "display": "Dressy",
          "value": "Dressy"
        },
        {
          "display": "Casual",
          "value": "Casual"
        }
      ]
    },
    "description": "What style of shorts do you like?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shorts_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shorts Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Tell us about your company. Be concise. (850 Character Limit)",
    "profile_template": {
      "multi": "true",
      "id": "0091",
      "name": "Bio",
      "image_name": "biography.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "short_company_description",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Short Company Description"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Bio"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Male",
          "value": "Male"
        },
        {
          "display": "Female",
          "value": "Female"
        },
        {
          "display": "Adult",
          "value": "Adult"
        },
        {
          "display": "Child",
          "value": "Child"
        },
        {
          "display": "Toddler (1-5yr)",
          "value": "Toddler (1-5yr)"
        },
        {
          "display": "Infant (0-24m)",
          "value": "Infant (0-24m)"
        }
      ]
    },
    "description": "Who are these shoe sizes for?",
    "profile_template": {
      "multi": "true",
      "id": "0165",
      "name": "Shoe Size",
      "image_name": "womensshoes.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shoe_preference_category",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shoe Size Category"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Shoe Size"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "T-Shirts",
          "value": "T-Shirts"
        },
        {
          "display": "Collared Shirts",
          "value": "Collared Shirts"
        },
        {
          "display": "Frilly",
          "value": "Frilly"
        },
        {
          "display": "Sweatshirts",
          "value": "Sweatshirts"
        },
        {
          "display": "Sweaters",
          "value": "Sweaters"
        },
        {
          "display": "Tanks",
          "value": "Tanks"
        },
        {
          "display": "Turtleneck",
          "value": "Turtleneck"
        }
      ]
    },
    "description": "What style of shirt do you typically buy for your child?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_shirt_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shirt Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the shingles vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "shingles_vaccine_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shingles Vaccine Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Is the service open to all?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "service_open_all",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Service Open to All"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is this used for?",
    "profile_template": {
      "multi": "true",
      "id": "0112",
      "name": "Networking",
      "image_name": "networking.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "server_purpose",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Server Purpose"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Networking"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Beige",
          "value": "Beige"
        },
        {
          "display": "Black",
          "value": "Black"
        },
        {
          "display": "Blue",
          "value": "Blue"
        },
        {
          "display": "Brown",
          "value": "Brown"
        },
        {
          "display": "Green",
          "value": "Green"
        },
        {
          "display": "Grey",
          "value": "Grey"
        },
        {
          "display": "Orange",
          "value": "Orange"
        },
        {
          "display": "Pink",
          "value": "Pink"
        },
        {
          "display": "Purple",
          "value": "Purple"
        },
        {
          "display": "Red",
          "value": "Red"
        },
        {
          "display": "White",
          "value": "White"
        },
        {
          "display": "Yellow",
          "value": "Yellow"
        }
      ]
    },
    "description": "What color shirt do you typically buy for your child?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_shirt_colors",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shirt Colors"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Shrimp",
          "value": "Shrimp"
        },
        {
          "display": "Scallops",
          "value": "Scallops"
        },
        {
          "display": "Crab",
          "value": "Crab"
        },
        {
          "display": "Lobster",
          "value": "Lobster"
        },
        {
          "display": "Mussels",
          "value": "Mussels"
        },
        {
          "display": "Oysters",
          "value": "Oysters"
        },
        {
          "display": "Don't care for shellfish",
          "value": "Don't care for shellfish"
        }
      ]
    },
    "description": "Which of the following shellfish do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_shellfish_preferences",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Shellfish Preferences"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "security_dispatc_phone_number.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Security Dispatch Phone Number Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this scholarship.",
    "profile_template": {
      "multi": "true",
      "id": "0180",
      "name": "Scholarship",
      "image_name": "scholarship.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "scholarship_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Scholarship Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Scholarship"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the rotavirus vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "rotavirus_vaccine_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Rotavirus Vaccine Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the DIA for the right eye? (diameter usually falls between 13.x and 15.x)",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye_dia",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Right Eye DIA"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the BC for the right eye? (BC is Base Curve and is usually an 8.x or 9.x number)",
    "profile_template": {
      "multi": "true",
      "id": "0108",
      "name": "Vision",
      "image_name": "vision.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "right_eye_bc",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Right Eye BC"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vision"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What, if any, riders do you have on this policy?",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "home_riders",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Riders"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is the renter's insurance provider?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_insurance_provider",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Renter's Insurance Provider"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "repayment_begin_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Repayment Begin Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Accelerated death benefit",
          "value": "Accelerated death benefit"
        },
        {
          "display": "Accidental death benefit",
          "value": "Accidental death benefit"
        },
        {
          "display": "Accidental death and dismemberment",
          "value": "Accidental death and dismemberment"
        },
        {
          "display": "Disability income rider",
          "value": "Disability income rider"
        },
        {
          "display": "Family income benefit",
          "value": "Family income benefit"
        },
        {
          "display": "Guaranteed insurability",
          "value": "Guaranteed insurability"
        },
        {
          "display": "Level term",
          "value": "Level term"
        },
        {
          "display": "Waiver of premium",
          "value": "Waiver of premium"
        },
        {
          "display": "Other",
          "value": "Other"
        }
      ]
    },
    "description": "What riders does this policy include?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_riders",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Riders"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where is the religious ceremony?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "religious_ceremony",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Religious Ceremony"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this renter's insurance.",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Renter's Insurance Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Excellent",
          "value": "Excellent"
        },
        {
          "display": "Good",
          "value": "Good"
        },
        {
          "display": "Some Problems",
          "value": "Some Problems"
        },
        {
          "display": "Major Problems",
          "value": "Major Problems"
        }
      ]
    },
    "description": "Overall, how would you rate your credit history?",
    "profile_template": {
      "multi": "true",
      "id": "0018",
      "name": "Credit Report",
      "image_name": "creditreport.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "quality_of_credit",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Quality of Credit"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Credit Report"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_purchase_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Purchase Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_purchase_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Purchase Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Has the patient had any issues or complications with previous dental treatments?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "prior_dental_complications",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Prior Dental Complications"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_purchase_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Purchase Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When was this item purchased?",
    "profile_template": {
      "multi": "true",
      "id": "0083",
      "name": "Warranty",
      "image_name": "mywarranties.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "warranty_purchase_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Purchase Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Warranty"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the polio vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "polio_vaccine_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Polio Vaccine Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How many previous pregnancies were terminated?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "previous_terminations_of_pregnancies",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Previous Terminations of Pregnancies"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is the funeral plan prepaid?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "prepaid_funeral_plan",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Prepaid Funeral Plan"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_in_effect.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_policy_in_effect.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Do you have a prearranged funeral plan?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "prearranged_funeral_plan",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Prearranged Funeral Plan"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_in_effect.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_in_effect.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_in_effect.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did this life insurance coverage start?",
    "profile_template": {
      "multi": "true",
      "id": "0087",
      "name": "Life Insurance",
      "image_name": "mylifeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "life_policy_in_effect",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Life Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "When did the renter's insurance policy start?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_in_effect",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_expiration.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy Expiration Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_in_effect.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy in Effect Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Cabernet Sauvignon",
          "value": "Cabernet Sauvignon"
        },
        {
          "display": "Bordeaux",
          "value": "Bordeaux"
        },
        {
          "display": "Merlot",
          "value": "Merlot"
        },
        {
          "display": "Barbera",
          "value": "Barbera"
        },
        {
          "display": "Malbec",
          "value": "Malbec"
        },
        {
          "display": "Syrah/Shiraz",
          "value": "Syrah/Shiraz"
        },
        {
          "display": "Tempranillo",
          "value": "Tempranillo"
        },
        {
          "display": "Sangiovese",
          "value": "Sangiovese"
        },
        {
          "display": "Zinfandel (red)",
          "value": "Zinfandel (red)"
        },
        {
          "display": "Burgundy",
          "value": "Burgundy"
        },
        {
          "display": "Grenache",
          "value": "Grenache"
        },
        {
          "display": "Pinot Noir",
          "value": "Pinot Noir"
        },
        {
          "display": "Chardonnay",
          "value": "Chardonnay"
        },
        {
          "display": "Sauvignon Blanc",
          "value": "Sauvignon Blanc"
        },
        {
          "display": "Riesling",
          "value": "Riesling"
        },
        {
          "display": "Chenin Blanc",
          "value": "Chenin Blanc"
        },
        {
          "display": "Pinot Grigio",
          "value": "Pinot Grigio"
        },
        {
          "display": "Pouilly-Fuisse",
          "value": "Pouilly-Fuisse"
        },
        {
          "display": "Semillon",
          "value": "Semillon"
        },
        {
          "display": "Viognier",
          "value": "Viognier"
        }
      ]
    },
    "description": "Which of the following wine varieties do you prefer?",
    "profile_template": {
      "multi": "true",
      "id": "0107",
      "name": "Beverage Preferences",
      "image_name": "mydinnerparty.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "beverages_preferred_wine_variety",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Preferred Wine Variety"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Beverage Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "renters_policy_expiration.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy Expiration Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0082",
      "name": "Home Insurance",
      "image_name": "homeinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "policy_expiration.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Policy Expiration Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Home Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "l": {
          "mask": "%l",
          "display_name": "Last Four",
          "id": "l"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "l"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.last_four",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Police District Phone Number Last Four in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "n": {
          "mask": "%n",
          "display_name": "Local Number 7 digits",
          "id": "n"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "n"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.number",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Police District Phone Number Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "f": {
          "mask": "%f",
          "display_name": "First Three",
          "id": "f"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "f"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.first_three",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Police District Phone Number First Three in Local Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "x": {
          "mask": "%x",
          "display_name": "Extension Number",
          "id": "x"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "x"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.extension",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Police District Phone Number Extension"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Is the plot prepaid?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "plot_prepaid",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Plot Prepaid"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "date"
    },
    "description": "When did this person receive the pneumococcal / pneumonia vaccine?",
    "profile_template": {
      "multi": "true",
      "id": "0090",
      "name": "Immunizations & Screenings",
      "image_name": "immunizations_screening.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pneumococcal_pneumonia_vaccine",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pneumococcal / Pneumonia Vaccine"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Immunizations & Screenings"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Where is the plot?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "plot_location",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Plot Location"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "real"
    },
    "description": "What is the physical damage coverage for comprehensive (theft, vandalism, etc.)?",
    "profile_template": {
      "multi": "true",
      "id": "0009",
      "name": "Vehicle Insurance",
      "image_name": "mycarinsurance.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "physical_damage_coverage_comprehensive",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Physical Damage Coverage - Comprehensive"
      ],
      "semantic_type": [
        "real"
      ]
    },
    "pcategory": "Vehicle Insurance"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0021",
      "name": "Alarm System",
      "image_name": "alarmsystem.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "police_district_phone_number.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Police District Phone Number Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alarm System"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "a": {
          "mask": "%a",
          "display_name": "Area Code",
          "id": "a"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "a"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.area_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Phone Number on Account Area Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this phone number.",
    "profile_template": {
      "multi": "true",
      "id": "0003",
      "name": "Phone",
      "image_name": "phone.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "phone_number_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Phone Number Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Phone"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What toys does this pet like?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_toy_pref",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Toy Preferences"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "c": {
          "mask": "%c",
          "display_name": "Country Number",
          "id": "c"
        },
        "iso2": {
          "mask": "%iso2",
          "display_name": "Country by ISO code",
          "id": "iso2"
        },
        "plus": {
          "mask": "%plus",
          "display_name": "Country Number with leading +",
          "id": "plus"
        },
        "dd": {
          "mask": "%dd",
          "display_name": "Country Number with leading zeros",
          "id": "dd"
        },
        "name": {
          "mask": "%C",
          "display_name": "Country Name",
          "id": "name"
        }
      },
      "type": "string",
      "long": false,
      "format": {
        "id": "c"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0022",
      "name": "Accounts & Statements",
      "image_name": "billsandpayments.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "account_phone.country_code",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Phone Number on Account Country Code"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Accounts & Statements"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "What is the pet's temperment?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_temperment",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Temperment"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Describe the sleeping habits of the pet (cage, bed, etc.)",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_sleeping_pref",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Sleeping Preferences"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this pet.",
    "profile_template": {
      "multi": "true",
      "id": "0046",
      "name": "Pet Health",
      "image_name": "myvet.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_health_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet Health"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does your pet have a microchip?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_microchip",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Microchip"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this pet have any allergies?",
    "profile_template": {
      "multi": "true",
      "id": "0046",
      "name": "Pet Health",
      "image_name": "myvet.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_health_pet_allergies",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Pet Health"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Under what conditions does this pet growl, snarl, bark or cry?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_aggression",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Aggression"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": false,
    "semantic": {
      "type": "integer"
    },
    "description": "How much personal liability coverage does this policy include?",
    "profile_template": {
      "multi": "true",
      "id": "0085",
      "name": "Renter's Insurance",
      "image_name": "myrentersinsurance.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "renters_personal_liability_coverage",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Personal Liability Coverage"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Renter's Insurance"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "No known allergies",
          "value": "No known allergies"
        },
        {
          "display": "Dogs",
          "value": "Dogs"
        },
        {
          "display": "Cats",
          "value": "Cats"
        },
        {
          "display": "Rabbits",
          "value": "Rabbits"
        },
        {
          "display": "Rodents",
          "value": "Rodents"
        }
      ]
    },
    "description": "Is this person allergic to any pets?",
    "profile_template": {
      "multi": "true",
      "id": "0014",
      "name": "Allergies",
      "image_name": "myallergies.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "pet_allergies",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pet Allergies"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Allergies"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Has the patient had treatment for periodontal (gum) disease?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "periodontal_disease_treatments",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Periodontal Disease Treatments"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Either is fine",
          "value": "Either is fine"
        }
      ]
    },
    "description": "Do you prefer a cuff on your pant leg?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_pant_leg_cuff",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pant Leg Cuff"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Pleats",
          "value": "Pleats"
        },
        {
          "display": "Flat (No Pleats)",
          "value": "Flat (No Pleats)"
        },
        {
          "display": "Either",
          "value": "Either"
        }
      ]
    },
    "description": "Do you prefer pleats or a flat front on your pants?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_pant_front_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pant Front Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Jeans",
          "value": "Jeans"
        },
        {
          "display": "Khakis",
          "value": "Khakis"
        },
        {
          "display": "Dress Pants",
          "value": "Dress Pants"
        },
        {
          "display": "Cropped",
          "value": "Cropped"
        },
        {
          "display": "Straight Leg",
          "value": "Straight Leg"
        },
        {
          "display": "Boot Cut",
          "value": "Boot Cut"
        },
        {
          "display": "Leggings",
          "value": "Leggings"
        },
        {
          "display": "Bell Bottoms",
          "value": "Bell Bottoms"
        },
        {
          "display": "Skinny",
          "value": "Skinny"
        },
        {
          "display": "Loose Fit",
          "value": "Loose Fit"
        },
        {
          "display": "Boyfriend Cut",
          "value": "Boyfriend Cut"
        },
        {
          "display": "Low Rise",
          "value": "Low Rise"
        },
        {
          "display": "Mid Rise",
          "value": "Mid Rise"
        }
      ]
    },
    "description": "What style of pants do you typically buy for your child?",
    "profile_template": {
      "multi": "true",
      "id": "0065",
      "name": "Kid's Clothing Preferences",
      "image_name": "children_clothing_preferneces.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "girls_pant_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pant Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Kid's Clothing Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Skinny",
          "value": "Skinny"
        },
        {
          "display": "Straight",
          "value": "Straight"
        },
        {
          "display": "Slim-Straight",
          "value": "Slim-Straight"
        },
        {
          "display": "Relaxed",
          "value": "Relaxed"
        },
        {
          "display": "Boot-cut",
          "value": "Boot-cut"
        },
        {
          "display": "Wide-Leg",
          "value": "Wide-Leg"
        },
        {
          "display": "Trouser",
          "value": "Trouser"
        }
      ]
    },
    "description": "What is your preferred pant fit?",
    "profile_template": {
      "multi": "true",
      "id": "0063",
      "name": "Women's Clothing Preferences",
      "image_name": "womens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pant_fit_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pant Fit Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        }
      ]
    },
    "description": "Does this person have concerns about PMS?",
    "profile_template": {
      "multi": "true",
      "id": "0089",
      "name": "Women's Health History",
      "image_name": "women_health_history.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pms",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "PMS"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Women's Health History"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_principal_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Principal Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "26",
          "value": "26"
        },
        {
          "display": "26.5",
          "value": "26.5"
        },
        {
          "display": "27",
          "value": "27"
        },
        {
          "display": "27.5",
          "value": "27.5"
        },
        {
          "display": "28",
          "value": "28"
        },
        {
          "display": "28.5",
          "value": "28.5"
        },
        {
          "display": "29",
          "value": "29"
        },
        {
          "display": "29.5",
          "value": "29.5"
        },
        {
          "display": "30",
          "value": "30"
        },
        {
          "display": "30.5",
          "value": "30.5"
        },
        {
          "display": "31",
          "value": "31"
        },
        {
          "display": "31.5",
          "value": "31.5"
        },
        {
          "display": "32",
          "value": "32"
        },
        {
          "display": "32.5",
          "value": "32.5"
        },
        {
          "display": "33",
          "value": "33"
        },
        {
          "display": "33.5",
          "value": "33.5"
        },
        {
          "display": "34",
          "value": "34"
        },
        {
          "display": "34.5",
          "value": "34.5"
        },
        {
          "display": "35",
          "value": "35"
        },
        {
          "display": "35.5",
          "value": "35.5"
        },
        {
          "display": "36",
          "value": "36"
        },
        {
          "display": "36.5",
          "value": "36.5"
        },
        {
          "display": "37",
          "value": "37"
        },
        {
          "display": "37.5",
          "value": "37.5"
        },
        {
          "display": "38",
          "value": "38"
        }
      ]
    },
    "description": "What is your pant inseam length?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_men_pant_inseam_length",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Pant Inseam Length"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_principal_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Principal Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "yy": {
          "mask": "%y",
          "display_name": "yy",
          "id": "yy"
        },
        "yyyy": {
          "mask": "%Y",
          "display_name": "yyyy",
          "id": "yyyy"
        }
      },
      "type": "year",
      "format": {
        "id": "yyyy"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_interest_date.year",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Interest Date Year"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_principal_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Principal Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "mm": {
          "mask": "%m",
          "display_name": "mm",
          "id": "mm"
        },
        "m": {
          "mask": "%-m",
          "display_name": "m",
          "id": "m"
        },
        "am": {
          "mask": "%b",
          "display_name": "Abbreviated month name",
          "id": "am"
        },
        "fm": {
          "mask": "%B",
          "display_name": "Full month name",
          "id": "fm"
        }
      },
      "type": "month",
      "format": {
        "id": "mm"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_interest_date.month",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Interest Date Month"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "dd": {
          "mask": "%d",
          "display_name": "dd",
          "id": "dd"
        },
        "d": {
          "mask": "%-d",
          "display_name": "d",
          "id": "d"
        }
      },
      "type": "day",
      "format": {
        "id": "dd"
      }
    },
    "description": "",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_interest_date.day",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Interest Date Day"
      ],
      "semantic_type": [
        "integer"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Who is owns the insurance policy on this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_insurance_policy_owner",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Vehicle's Insurance Policy Owner"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "formats": {
        "american": {
          "mask": "%m/%d/%Y",
          "display_name": "American",
          "id": "american"
        },
        "european": {
          "mask": "%d/%m/%Y",
          "display_name": "European",
          "id": "european"
        }
      },
      "type": "date",
      "format": {
        "id": "american"
      }
    },
    "description": "What is the outstanding interest as of date?",
    "profile_template": {
      "multi": "true",
      "id": "0041",
      "name": "Loan",
      "image_name": "myloans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "outstanding_interest_date",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Outstanding Interest Date"
      ],
      "semantic_type": [
        "date"
      ]
    },
    "pcategory": "Loan"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the contact information for this adjuster?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_adjuster_contact",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Vehicle's Adjuster Contact"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is this vehicle's insurance claim number?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_claim_number",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Vehicle's Claim Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the name of the adjuster managing the claims process for this vehicle?",
    "profile_template": {
      "multi": "true",
      "id": "0116",
      "name": "Vehicles Involved in Accident",
      "image_name": "vehicles_involved_in_accident.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_vehicles_adjuster",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Vehicle's Adjuster"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Vehicles Involved in Accident"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Are there other requests?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_requests",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Requests"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Are there other religious or cultural considerations?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "other_religious_cultural_considerations",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Other Religious or Cultural Considerations"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Has the patient had orthodontics (braces)?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "orthodontics",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Orthodontics"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "Would you like an open casket service?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "open_casket",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Open Casket"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "Yes",
          "value": "Yes"
        },
        {
          "display": "No",
          "value": "No"
        },
        {
          "display": "Don't Know/Understand",
          "value": "Don't Know/Understand"
        }
      ]
    },
    "description": "Has the patient had oral surgery?",
    "profile_template": {
      "multi": "true",
      "id": "0141",
      "name": "Dental History",
      "image_name": "dental.png"
    },
    "sensitive": true,
    "score": 1,
    "type": "field_template",
    "id": "oral_surgery",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Oral Surgery"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Dental History"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional notes about this alcoholic beverage.",
    "profile_template": {
      "multi": "true",
      "id": "0162",
      "name": "Alcoholic Beverage",
      "image_name": "wines.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "alcoholic_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Alcoholic Beverage"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Where should the obituary be placed?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "funeral_obiturary",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Obiturary"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "None",
          "value": "0"
        },
        {
          "display": "Don't know or indifferent",
          "value": "1"
        },
        {
          "display": "Don't care at all",
          "value": "2"
        },
        {
          "display": "Don't care",
          "value": "3"
        },
        {
          "display": "Would be nice",
          "value": "4"
        },
        {
          "display": "Very much",
          "value": "5"
        }
      ]
    },
    "description": "Do you care if your food is organic or locally grown?",
    "profile_template": {
      "multi": "true",
      "id": "0098",
      "name": "Food Restrictions & Preferences",
      "image_name": "foodprefs.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "food_pref_organic_food_fan",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Organic Food Fan"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Food Restrictions & Preferences"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Conservative",
          "value": "Conservative"
        },
        {
          "display": "Bold Colors",
          "value": "Bold Colors"
        },
        {
          "display": "Stripes",
          "value": "Stripes"
        },
        {
          "display": "Adventurous Patterns",
          "value": "Adventurous Patterns"
        }
      ]
    },
    "description": "What is your necktie style?",
    "profile_template": {
      "multi": "true",
      "id": "0031",
      "name": "Men's Clothing Preferences",
      "image_name": "mens_clothing_preferences.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "men_necktie_style",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Necktie Style"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Which music would you like?",
    "profile_template": {
      "multi": "true",
      "id": "0185",
      "name": "Funeral Preferences",
      "image_name": "funeral_plans.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "funeral_music",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Music"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Funeral Preferences"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": true
    },
    "description": "Enter any additional details about the pronunciation of your name.",
    "profile_template": {
      "multi": "true",
      "id": "0000",
      "name": "Name",
      "image_name": "name.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "name_pronunciation_notes",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Name Pronunciation Notes"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Name"
  },
  {
    "multi": true,
    "semantic": {
      "validate": true,
      "type": "string",
      "options": [
        {
          "display": "13",
          "value": "13"
        },
        {
          "display": "13.5",
          "value": "13.5"
        },
        {
          "display": "14",
          "value": "14"
        },
        {
          "display": "14.5",
          "value": "14.5"
        },
        {
          "display": "15",
          "value": "15"
        },
        {
          "display": "15.5",
          "value": "15.5"
        },
        {
          "display": "16",
          "value": "16"
        },
        {
          "display": "16.5",
          "value": "16.5"
        },
        {
          "display": "17",
          "value": "17"
        },
        {
          "display": "17.5",
          "value": "17.5"
        },
        {
          "display": "18",
          "value": "18"
        },
        {
          "display": "18.5",
          "value": "18.5"
        },
        {
          "display": "19",
          "value": "19"
        },
        {
          "display": "20",
          "value": "20"
        }
      ]
    },
    "description": "What is your shirt neck size?",
    "profile_template": {
      "multi": "true",
      "id": "0173",
      "name": "Men's Clothing Size",
      "image_name": "mensretail.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "size_men_neck_size",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Neck Size"
      ],
      "semantic_type": [
        "enum"
      ]
    },
    "pcategory": "Men's Clothing Size"
  },
  {
    "multi": false,
    "semantic": {
      "type": "string",
      "long": false
    },
    "description": "What is the microchip number?",
    "profile_template": {
      "multi": "true",
      "id": "0044",
      "name": "Pet",
      "image_name": "mypets.png"
    },
    "sensitive": false,
    "score": 1,
    "type": "field_template",
    "id": "pet_microchip_number",
    "metadata": {
      "alias": [],
      "forms_reach": [],
      "synonym": [],
      "name": [
        "Microchip Number"
      ],
      "semantic_type": [
        "string"
      ]
    },
    "pcategory": "Pet"
  },
  {
    "multi": true,
    "semantic": {
      "validate": false,
      "type": "string",
      "options": [
        {
          "display": "Soda",
          "value": "Soda"
        },
        {
          "display": "Tonic",
        },