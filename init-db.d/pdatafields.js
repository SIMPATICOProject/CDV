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
    "id": "accident_date",
    "name": "Accident Date",
    "category": "Vehicle Accident",
    "description": "What date did the accident take place?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "accident_date.day",
    "name": "Accident Date Day",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "accident_date.month",
    "name": "Accident Date Month",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "accident_date.year",
    "name": "Accident Date Year",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "accident_description",
    "name": "Accident Description",
    "category": "Vehicle Accident",
    "description": "Describe the accident.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "accident_location",
    "name": "Accident Location",
    "category": "Vehicle Accident",
    "description": "Where did the accident take place?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "accident_nickname",
    "name": "Gem Name",
    "category": "Vehicle Accident",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "accident_police_report",
    "name": "Accident Police Report",
    "category": "Vehicle Accident",
    "description": "What was the number for the police report on this accident?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "accident_time",
    "name": "Accident Time",
    "category": "Vehicle Accident",
    "description": "What time did the accident take place?",
    "privatePData": null,
    "semanticType": "time",
    "uri": null
  },
  {
    "id": "accident_weather_conditions",
    "name": "Accident Weather Conditions",
    "category": "Vehicle Accident",
    "description": "What were the weather conditions when the accident took place?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number",
    "name": "Account Contact Number",
    "category": "Bank Account",
    "description": "What is the phone number for support for this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.area_code",
    "name": "Account Contact Number Area Code",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.country_code",
    "name": "Account Contact Number Country Code",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.extension",
    "name": "Account Contact Number Extension",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.first_three",
    "name": "Account Contact Number First Three in Local Number",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.last_four",
    "name": "Account Contact Number Last Four in Local Number",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_contact_number.number",
    "name": "Account Contact Number Local Number",
    "category": "Bank Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_debited_during_auto_pay",
    "name": "Account Debited During Auto-Pay",
    "category": "Accounts & Statements",
    "description": "If the account is paid automatically each month, which account is debited?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_nickname",
    "name": "Gem Name",
    "category": "Passwords",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_notes",
    "name": "Passwords Notes",
    "category": "Passwords",
    "description": "Enter any additional details about this login account.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_password",
    "name": "Password",
    "category": "Passwords",
    "description": "What is the password?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_pin_number",
    "name": "PIN Number",
    "category": "Passwords",
    "description": "What is the PIN number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_rules_notes",
    "name": "Login Rules Notes",
    "category": "Passwords",
    "description": "Enter any additional details about the rules.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_user_name",
    "name": "Username/Email",
    "category": "Passwords",
    "description": "What is the username or email?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_logins_website_address",
    "name": "Website",
    "category": "Passwords",
    "description": "What is the website address (URL) for this account?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "account_nickname",
    "name": "Gem Name",
    "category": "Bank Account",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone",
    "name": "Phone Number on Account",
    "category": "Accounts & Statements",
    "description": "What is the phone number associated with the account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.area_code",
    "name": "Phone Number on Account Area Code",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.country_code",
    "name": "Phone Number on Account Country Code",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.extension",
    "name": "Phone Number on Account Extension",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.first_three",
    "name": "Phone Number on Account First Three in Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.last_four",
    "name": "Phone Number on Account Last Four in Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "account_phone.number",
    "name": "Phone Number on Account Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "additional_conditions_info",
    "name": "Additional Conditions Info",
    "category": "Health History",
    "description": "Provide any other information about your conditions you would like to share.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "additional_symptom_info",
    "name": "Additional Symptom Info",
    "category": "Health History",
    "description": "Provide any other information about your symptoms you would like to share.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjustable_rate_reset",
    "name": "Adjustable Rate Reset",
    "category": "Loan",
    "description": "If this is an adjustable rate, when does it reset?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "adjusted_gross_income",
    "name": "Adjusted Gross Income",
    "category": "Tax & Income",
    "description": "What was the adjusted gross income?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "adjusters_email",
    "name": "Adjuster's Email",
    "category": "Vehicle Accident",
    "description": "What is your insurance adjuster's email address?",
    "privatePData": null,
    "semanticType": "email",
    "uri": null
  },
  {
    "id": "adjusters_phone",
    "name": "Adjuster's Phone",
    "category": "Vehicle Accident",
    "description": "What is your insurance adjuster's phone number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.area_code",
    "name": "Adjuster's Phone Area Code",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.country_code",
    "name": "Adjuster's Phone Country Code",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.extension",
    "name": "Adjuster's Phone Extension",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.first_three",
    "name": "Adjuster's Phone First Three in Local Number",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.last_four",
    "name": "Adjuster's Phone Last Four in Local Number",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "adjusters_phone.number",
    "name": "Adjuster's Phone Local Number",
    "category": "Vehicle Accident",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "advanced_directive",
    "name": "Advanced Directive",
    "category": "Health History",
    "description": "Does this person have an advanced directive / living will?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "age_of_death",
    "name": "Age of Death",
    "category": "Health History",
    "description": "If this person is deceased, how old were they when they passed away?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "age_of_first_period",
    "name": "Age of First Period",
    "category": "Women's Health History",
    "description": "How old was this person when they had their first period?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "alarm_code",
    "name": "Alarm Code",
    "category": "Alarm System",
    "description": "What is the code to arm and disarm the alarm?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company",
    "name": "Alarm Company",
    "category": "Alarm System",
    "description": "What is the name of your alarm company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number",
    "name": "Alarm Company Phone Number",
    "category": "Alarm System",
    "description": "What is the phone number for your alarm company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.area_code",
    "name": "Alarm Company Phone Number Area Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.country_code",
    "name": "Alarm Company Phone Number Country Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.extension",
    "name": "Alarm Company Phone Number Extension",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.first_three",
    "name": "Alarm Company Phone Number First Three in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.last_four",
    "name": "Alarm Company Phone Number Last Four in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_company_phone_number.number",
    "name": "Alarm Company Phone Number Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_instructions",
    "name": "Alarm Instructions",
    "category": "Alarm System",
    "description": "How do you activate and deactivate the alarm system?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_notes",
    "name": "Alarm Notes",
    "category": "Alarm System",
    "description": "Enter any additional details about your alarm.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_panel_location",
    "name": "Alarm Panel Location",
    "category": "Alarm System",
    "description": "Where are the alarm panels located in your home?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_password",
    "name": "Alarm Password",
    "category": "Alarm System",
    "description": "What is the security password for the alarm company if they call when your alarm is going off?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alarm_username",
    "name": "Gem Name",
    "category": "Alarm System",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcohol_consumption",
    "name": "Alcohol Consumption",
    "category": "Health Information",
    "description": "Does this person consume alcohol?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "alcoholic_age",
    "name": "Age",
    "category": "Alcoholic Beverage",
    "description": "For how long has this alcohol been aged?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "alcoholic_alcohol_content",
    "name": "Alcohol Content",
    "category": "Alcoholic Beverage",
    "description": "What is the alcohol content?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "alcoholic_beverage_gem_name",
    "name": "Gem Name",
    "category": "Alcoholic Beverage",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcoholic_beverage_name",
    "name": "Alcoholic Beverage Name",
    "category": "Alcoholic Beverage",
    "description": "What is the name of this alcoholic beverage?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "alcoholic_beverage_type",
    "name": "Alcoholic Beverage Type",
    "category": "Alcoholic Beverage",
    "description": "What type of alcoholic beverage is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "alcoholic_brand",
    "name": "Brand",
    "category": "Alcoholic Beverage",
    "description": "What winery, company or brand produces this?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcoholic_notes",
    "name": "Notes",
    "category": "Alcoholic Beverage",
    "description": "Enter any additional notes about this alcoholic beverage.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcoholic_price_range",
    "name": "Price Range",
    "category": "Alcoholic Beverage",
    "description": "What is the price range?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "alcoholic_region",
    "name": "Region",
    "category": "Alcoholic Beverage",
    "description": "In what region or area is this alcoholic beverage made?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcoholic_size",
    "name": "Size",
    "category": "Alcoholic Beverage",
    "description": "What is the bottle size or format for that price?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "alcoholic_varietal",
    "name": "Varietal",
    "category": "Alcoholic Beverage",
    "description": "What specific type/varietal is this?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alcoholic_year_made",
    "name": "Year Made",
    "category": "Alcoholic Beverage",
    "description": "What year was this made?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "alle_notes",
    "name": "Allergy Notes",
    "category": "Allergies",
    "description": "Enter any additional notes about this person's allergies.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "allergic_treatment_instructions",
    "name": "Treatment Instructions",
    "category": "Allergies",
    "description": "Describe treatment instructions for the allergic reaction.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "allergies_allergy",
    "name": "Allergy",
    "category": "Allergies",
    "description": "Name the allergy that requires treatment.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "allergies_medication",
    "name": "Medication Allergies",
    "category": "Allergies",
    "description": "Is this person allergic to any of the following medications?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "allergies_nickname",
    "name": "Gem Name",
    "category": "Allergies",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "amount_of_auto_transfer",
    "name": "Amount of Auto Transfer",
    "category": "Investment Account",
    "description": "How much is automatically transferred into this account?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "annual_fees",
    "name": "Annual Fees",
    "category": "Funeral Preferences",
    "description": "What are the annual fees?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "annual_premium",
    "name": "Annual Premium",
    "category": "Vehicle Insurance",
    "description": "How much does the annual insurance premium cost?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "annual_real_estate_taxes",
    "name": "Annual Real Estate Taxes",
    "category": "Home",
    "description": "What are the annual real estate taxes?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "architecture_style",
    "name": "Architecture Style",
    "category": "Home",
    "description": "What style of construction is this home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "auto_pay",
    "name": "Auto-Pay",
    "category": "Accounts & Statements",
    "description": "Is this account set up to auto-pay?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "auto_transfer_enabled",
    "name": "Auto Transfer Enabled",
    "category": "Investment Account",
    "description": "Is money automatically transferred into this account?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "auto_transfer_frequency",
    "name": "Auto Transfer Frequency",
    "category": "Investment Account",
    "description": "How frequently is money automatically transferred into this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bank_account_number",
    "name": "Account Number",
    "category": "Bank Account",
    "description": "What is the bank account number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bank_account_routing_number",
    "name": "Routing Number",
    "category": "Bank Account",
    "description": "What is the bank account's routing number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bank_account_type",
    "name": "Account Type",
    "category": "Bank Account",
    "description": "What type of account is it (checking, savings, etc)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bank_name",
    "name": "Bank Name",
    "category": "Bank Account",
    "description": "What is the name of the bank?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bank_notes",
    "name": "Bank Account Notes",
    "category": "Bank Account",
    "description": "Enter any additional details about this bank account.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bank_website_address",
    "name": "Website Address",
    "category": "Bank Account",
    "description": "What is the website address (URL) for this account?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "beneficiaries",
    "name": "Beneficiaries",
    "category": "Life Insurance",
    "description": "Who are the beneficiaries and what are their relationships to the policy holder?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "beverage_preference_name",
    "name": "Gem Name",
    "category": "Beverage Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "beverages_after_dinner_drinks",
    "name": "After Dinner Drinks",
    "category": "Beverage Preferences",
    "description": "What type of after dinner drink do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_alcoholic_beverages",
    "name": "Alcoholic Beverages",
    "category": "Beverage Preferences",
    "description": "What is your preferred alcohol?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_beer_preferences",
    "name": "Beer Preferences",
    "category": "Beverage Preferences",
    "description": "What type of beer do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_mixers",
    "name": "Mixers",
    "category": "Beverage Preferences",
    "description": "What types of mixers do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_notes",
    "name": "Beverage Notes",
    "category": "Beverage Preferences",
    "description": "Enter any additional notes on your beverage preferences.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "beverages_preferred_wine_type",
    "name": "Preferred Wine Type",
    "category": "Beverage Preferences",
    "description": "What types of wine do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_preferred_wine_variety",
    "name": "Preferred Wine Variety",
    "category": "Beverage Preferences",
    "description": "Which of the following wine varieties do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_spirits_preferences",
    "name": "Spirits Preferences",
    "category": "Beverage Preferences",
    "description": "What types of spirits do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "beverages_your_drink",
    "name": "Your Drink",
    "category": "Beverage Preferences",
    "description": "What is your favorite alcoholic drink?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bike_lock_brand",
    "name": "Lock Brand",
    "category": "Combination Locks",
    "description": "What brand of lock is this?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bike_lock_key_number",
    "name": "Lock Key Number",
    "category": "Combination Locks",
    "description": "What is the serial number of your lock's key?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bike_lock_model",
    "name": "Lock Model",
    "category": "Combination Locks",
    "description": "What is the lock model?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bike_lock_style",
    "name": "Lock Style",
    "category": "Combination Locks",
    "description": "What style of lock is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bill_account_number",
    "name": "Account Number",
    "category": "Accounts & Statements",
    "description": "What is the account number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bill_arrive_date",
    "name": "Day Statement Arrives",
    "category": "Accounts & Statements",
    "description": "On which day of the month is the bill usually received? (enter number 1-31)",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bill_company",
    "name": "Company",
    "category": "Accounts & Statements",
    "description": "What company issues this statement?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bill_due_date",
    "name": "Day Statement Due",
    "category": "Accounts & Statements",
    "description": "On which day of the month is this bill usually due? (enter number 1-31)",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bill_name",
    "name": "Gem Name",
    "category": "Accounts & Statements",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bill_notes",
    "name": "Statement Notes",
    "category": "Accounts & Statements",
    "description": "Please enter additional details about this statement.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bill_total_balance",
    "name": "Total Balance",
    "category": "Accounts & Statements",
    "description": "What is the total balance on this account?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "bill_type",
    "name": "Account Type",
    "category": "Accounts & Statements",
    "description": "What kind of account is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "bill_typical_amount",
    "name": "Payment Amount",
    "category": "Accounts & Statements",
    "description": "What is the amount due?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "bills_due_real_date",
    "name": "Due Date",
    "category": "Accounts & Statements",
    "description": "What is the due date?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "bills_phone_number",
    "name": "Phone Number",
    "category": "Accounts & Statements",
    "description": "What's the phone number to get in touch with this company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.area_code",
    "name": "Phone Number Area Code",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.country_code",
    "name": "Phone Number Country Code",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.extension",
    "name": "Phone Number Extension",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.first_three",
    "name": "Phone Number First Three in Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.last_four",
    "name": "Phone Number Last Four in Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_phone_number.number",
    "name": "Phone Number Local Number",
    "category": "Accounts & Statements",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bills_statement_date",
    "name": "Statement Date",
    "category": "Accounts & Statements",
    "description": "What is the date for this statement?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "bio",
    "name": "Bio",
    "category": "Bio",
    "description": "Tell us about yourself. Elaborate as much as possible.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bio_name",
    "name": "Gem Name",
    "category": "Bio",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bio_notes",
    "name": "Bio Notes",
    "category": "Bio",
    "description": "Enter any additional notes you may have on your bio or company description.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birth_certificate_birthday",
    "name": "Date of Birth on Certificate",
    "category": "Birth Certificate",
    "description": "What is the date of birth?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "birth_certificate_birthday.day",
    "name": "Date of Birth on Certificate Day",
    "category": "Birth Certificate",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birth_certificate_birthday.month",
    "name": "Date of Birth on Certificate Month",
    "category": "Birth Certificate",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birth_certificate_birthday.year",
    "name": "Date of Birth on Certificate Year",
    "category": "Birth Certificate",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birth_certificate_country_of_birth",
    "name": "Country of Birth",
    "category": "Birth Certificate",
    "description": "What is the country of birth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "birth_certificate_county_of_birth",
    "name": "County of Birth",
    "category": "Birth Certificate",
    "description": "What is the county of birth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "birth_certificate_hospital_of_birth",
    "name": "Hospital of Birth",
    "category": "Birth Certificate",
    "description": "At which hospital did the birth take place?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birth_certificate_nickname",
    "name": "Gem Name",
    "category": "Birth Certificate",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birth_certificate_notes",
    "name": "Birth Certificate Notes",
    "category": "Birth Certificate",
    "description": "Enter any additional notes about this birth certificate.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birth_certificate_number",
    "name": "Birth Certificate Number",
    "category": "Birth Certificate",
    "description": "What is the certificate number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birth_certificate_place_of_birth",
    "name": "City of Birth",
    "category": "Birth Certificate",
    "description": "What is the city of birth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "birth_certificate_sex",
    "name": "Sex",
    "category": "Birth Certificate",
    "description": "What is the sex?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "birth_certificate_state_of_birth",
    "name": "State of Birth",
    "category": "Birth Certificate",
    "description": "What is the state of birth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "birth_certificate_time_of_birth",
    "name": "Time of Birth",
    "category": "Birth Certificate",
    "description": "What is the time of birth?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birthday_birthday",
    "name": "Birthday",
    "category": "Birthday",
    "description": "What is the date of birth?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "birthday_birthday.day",
    "name": "Birthday Day",
    "category": "Birthday",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birthday_birthday.month",
    "name": "Birthday Month",
    "category": "Birthday",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birthday_birthday.year",
    "name": "Birthday Year",
    "category": "Birthday",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "birthday_gem_name",
    "name": "Gem Name",
    "category": "Birthday",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "birthday_notes",
    "name": "Birthday Notes",
    "category": "Birthday",
    "description": "Enter any additional notes about this birthday.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "bite_lips_or_cheeks",
    "name": "Bite Lips or Cheeks",
    "category": "Dental History",
    "description": "Does the patient bite his/her lips or cheeks regularly?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "blood_pressure",
    "name": "Blood Pressure",
    "category": "Health Information",
    "description": "What is this person's blood pressure?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "brands_you_dont_like",
    "name": "Brands You Dislike",
    "category": "Women's Clothing Preferences",
    "description": "Which brands do you avoid?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "brands_you_love",
    "name": "Brands You Love",
    "category": "Women's Clothing Preferences",
    "description": "What are your favorite brands?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "brokerage_account_balance",
    "name": "Account Balance",
    "category": "Investment Account",
    "description": "What is the balance of this investment account?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "brokerage_account_nickname",
    "name": "Gem Name",
    "category": "Investment Account",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "brokerage_account_number",
    "name": "Account Number",
    "category": "Investment Account",
    "description": "What is the account number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "brokerage_account_type",
    "name": "Account Type",
    "category": "Investment Account",
    "description": "What type of brokerage account is it?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "brokerage_company",
    "name": "Brokerage Company",
    "category": "Investment Account",
    "description": "What is the brokerage company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "brokerage_date_of_account_balance",
    "name": "Date of Account Balance",
    "category": "Investment Account",
    "description": "Identify the date the above account balance was retrieved.",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "brokerage_date_of_account_balance.day",
    "name": "Date of Account Balance Day",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "brokerage_date_of_account_balance.month",
    "name": "Date of Account Balance Month",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "brokerage_date_of_account_balance.year",
    "name": "Date of Account Balance Year",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "brokerage_interest_rate",
    "name": "Interest Rate",
    "category": "Investment Account",
    "description": "What is the account interest rate?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "brokerage_notes",
    "name": "Investment Account Notes",
    "category": "Investment Account",
    "description": "Enter any additional notes about this investment account.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "brokerage_website_address",
    "name": "Website Address",
    "category": "Investment Account",
    "description": "What is the website address (URL) for this account?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "brushing_habits",
    "name": "Brushing Habits",
    "category": "Dental History",
    "description": "Does this person regularly brush their teeth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "business_investment_farm",
    "name": "Investments",
    "category": "Tax & Income",
    "description": "What was the total for investments?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "buying_philosophy",
    "name": "Buying Philosophy",
    "category": "Women's Clothing Preferences",
    "description": "Do you have a philosophy when shopping?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "cac_notes",
    "name": "CAC Notes",
    "category": "DOD Common Access Card (CAC)",
    "description": "Enter any additional details about this person's CAC info.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "caffeine_consumption",
    "name": "Caffeine Consumption",
    "category": "Health Information",
    "description": "Does this person consume caffeine?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "caffeine_frequency",
    "name": "Caffeine Frequency",
    "category": "Health Information",
    "description": "How often does this person consume caffeine?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "caffeine_type",
    "name": "Caffeine Type",
    "category": "Health Information",
    "description": "What type of caffeine does this person consume?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "car_accident_notes",
    "name": "Car Accident Notes",
    "category": "Vehicle Accident",
    "description": "Enter any additional details about the accident.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_annual_mileage",
    "name": "Annual Mileage",
    "category": "Vehicle",
    "description": "How many miles do you drive per year?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "car_axel_number",
    "name": "Axel Number",
    "category": "Vehicle",
    "description": "How many axels does your vehicle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_capacity",
    "name": "Vehicle Capacity",
    "category": "Vehicle",
    "description": "How many people (including the driver) can your vehicle hold?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_color",
    "name": "Exterior Color",
    "category": "Vehicle",
    "description": "What is the exterior color of your vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_commute_miles",
    "name": "Commute Miles (each way)",
    "category": "Vehicle",
    "description": "How many miles do you commute each way (to school or work)?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "car_drivetrain",
    "name": "Drivetrain",
    "category": "Vehicle",
    "description": "What drivetrain does your vehicle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_engine",
    "name": "Engine",
    "category": "Vehicle",
    "description": "What size engine does your vehicle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_fuel_type",
    "name": "Fuel Type",
    "category": "Vehicle",
    "description": "What is your vehicle's fuel type?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_insurance_id_number",
    "name": "Car Insurance ID Number",
    "category": "Vehicle Insurance",
    "description": "What is your auto insurance ID number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_miles_per_gallon",
    "name": "Miles per Gallon",
    "category": "Vehicle",
    "description": "How many miles per gallon does this vehicle get?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "car_motorcycle_insurance_company_website",
    "name": "Vehicle Insurance Company Website",
    "category": "Vehicle Insurance",
    "description": "What is the website address for your car/motorcycle insurance provider?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "car_motorcycle_insurance_notes",
    "name": "Vehicle Insurance Notes",
    "category": "Vehicle Insurance",
    "description": "Enter any additional notes about this car and motorcycle insurance.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_options",
    "name": "Options",
    "category": "Vehicle",
    "description": "What options does your vehicle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_ownership",
    "name": "Ownership",
    "category": "Vehicle",
    "description": "Is this vehicle owned, financed or leased?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "car_transmission",
    "name": "Transmission",
    "category": "Vehicle",
    "description": "What transmission type does your vehicle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_trim_style",
    "name": "Trim Style",
    "category": "Vehicle",
    "description": "What is your vehicle's trim style?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_value",
    "name": "Vehicle Value",
    "category": "Vehicle Insurance",
    "description": "What is the estimated value of the vehicle?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "car_vehicle_use",
    "name": "Vehicle Use",
    "category": "Vehicle",
    "description": "For what purpose do you use this vehicle?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "car_vin",
    "name": "VIN",
    "category": "Vehicle",
    "description": "What is your vehicle's VIN?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "car_witness_name",
    "name": "Witness name",
    "category": "Vehicle Accident Witnesses",
    "description": "Enter the name of a witness to the car accident.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number",
    "name": "Card Contact Number",
    "category": "Credit & Debit Card",
    "description": "What is the phone number for support for this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.area_code",
    "name": "Card Contact Number Area Code",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.country_code",
    "name": "Card Contact Number Country Code",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.extension",
    "name": "Card Contact Number Extension",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.first_three",
    "name": "Card Contact Number First Three in Local Number",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.last_four",
    "name": "Card Contact Number Last Four in Local Number",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_contact_number.number",
    "name": "Card Contact Number Local Number",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_network",
    "name": "Card Type",
    "category": "Credit & Debit Card",
    "description": "What network does this card use (Visa, MasterCard, Macy's, etc)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "card_nickname",
    "name": "Gem Name",
    "category": "Credit & Debit Card",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "card_type",
    "name": "Payment Type",
    "category": "Credit & Debit Card",
    "description": "What kind of card is this (Credit, Debit, ATM)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "cars_involved",
    "name": "Cars Involved",
    "category": "Vehicle Accident",
    "description": "How many cars were involved in the accident?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "cash_assets",
    "name": "Cash Assets",
    "category": "Tax & Income",
    "description": "What was the total amount from cash, checking and savings?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "casket_type",
    "name": "Casket Type",
    "category": "Funeral Preferences",
    "description": "What kind of casket would you like?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_activities",
    "name": "Activities",
    "category": "Charity",
    "description": "What activities do you participate in with this charity?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_activity_frequency",
    "name": "Activity Frequency",
    "category": "Charity",
    "description": "How frequently do you participate in activities for this charity?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "charity_affiliation",
    "name": "Affiliation",
    "category": "Charity",
    "description": "What is your affiliation with this charity?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "charity_category",
    "name": "Charity Category",
    "category": "Charity",
    "description": "What category is this charity associated?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "charity_gem_name",
    "name": "Gem Name",
    "category": "Charity",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_info_notes",
    "name": "Charity Info Notes",
    "category": "Charity",
    "description": "Use this field to enter any additional details about the charity.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_mission",
    "name": "Mission",
    "category": "Charity",
    "description": "Who or what is this charity designed to help?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_name",
    "name": "Charity Name",
    "category": "Charity",
    "description": "What is the name of this charity?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_notes",
    "name": "Charity Notes",
    "category": "Charity",
    "description": "Enter any additional notes about your relationship with this charity.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "charity_type",
    "name": "Type",
    "category": "Charity",
    "description": "What type of charity is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "charity_website",
    "name": "Charity Website",
    "category": "Charity",
    "description": "What is the website for this charity?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "checking_assets",
    "name": "Checking Assets",
    "category": "Tax & Income",
    "description": "What was the total amount from checking assets?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "chewing",
    "name": "Chewing",
    "category": "Dental History",
    "description": "Does the patient have difficulty chewing?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "chickenn_pox_vaccine",
    "name": "Chickenn Pox Vaccine",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the chicken pox vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "child_custodial_body",
    "name": "Custodial Body",
    "category": "Relatives",
    "description": "Custodial Body Entity name",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "child_custodial_date",
    "name": "Custodial Date",
    "category": "Relatives",
    "description": "Child Custodial Protocol date",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "child_custodial_protocol",
    "name": "Custodial Protocol",
    "category": "Relatives",
    "description": "Custodial Body Protocol Number",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "child_support_paid",
    "name": "Child Support Paid",
    "category": "Tax & Income",
    "description": "What was the total child support paid?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "child_support_received",
    "name": "Child Support Received",
    "category": "Tax & Income",
    "description": "What was the total child support received?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "childs_best_friend",
    "name": "Best Friend",
    "category": "Personality",
    "description": "Who is this person's best friend?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "childs_fears",
    "name": "Fears",
    "category": "Personality",
    "description": "What is this person afraid of?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "childs_temperment",
    "name": "Temperament",
    "category": "Personality",
    "description": "What is this person's temperament?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "cholesterol_hdl",
    "name": "Cholesterol - HDL",
    "category": "Health Information",
    "description": "What is this person's HDL (good) cholesterol number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "cholesterol_ldl",
    "name": "Cholesterol - LDL",
    "category": "Health Information",
    "description": "What is this person's LDL (bad) cholesterol number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "cholesterol_total",
    "name": "Cholesterol - Total",
    "category": "Health Information",
    "description": "What is this person's total cholesterol number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "cholesterol_triglycerides",
    "name": "Cholesterol - Triglycerides",
    "category": "Health Information",
    "description": "What is this person's triglyceride number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "citizenship",
    "name": "Citizenship",
    "category": "Passport",
    "description": "What is the citizenship?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "city_of_issuance",
    "name": "City of Issuance",
    "category": "Passport",
    "description": "What city was the passport issued in?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "claim_number",
    "name": "Claim Number",
    "category": "Vehicle Accident",
    "description": "What is number on your insurance claim for this accident?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "clench_or_grind_teeth",
    "name": "Clench or Grind Teeth",
    "category": "Dental History",
    "description": "Does the patient clench or grind your teeth while awake or asleep?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "clothing_notes",
    "name": "Women's Clothing Preference Notes",
    "category": "Women's Clothing Preferences",
    "description": "Enter any additional notes about your clothing essentials.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "clothing_preferences_in_your_words",
    "name": "Clothing Preferences, in your words",
    "category": "Women's Clothing Preferences",
    "description": "Describe any important clothing likes and dislikes before we get into the details.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "clothing_preferences_notes",
    "name": "Clothing Preferences Notes",
    "category": "Women's Clothing Preferences",
    "description": "Enter any additional notes about your clothing preferences.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "clothing_qualities",
    "name": "Clothing Qualities",
    "category": "Women's Clothing Preferences",
    "description": "What clothing qualities are most important to you?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "clothing_style",
    "name": "Clothing Style",
    "category": "Women's Clothing Preferences",
    "description": "What is your overall clothing style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "clothing_style_in_your_words",
    "name": "Clothing Style, In Your Words",
    "category": "Women's Clothing Preferences",
    "description": "How would you describe your style?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "coat_lenght",
    "name": "Coat Length",
    "category": "Women's Clothing Preferences",
    "description": "What length of coat do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "cold_sores_blisters_oral_lesions",
    "name": "Cold Sores/blisters/oral lesions",
    "category": "Dental History",
    "description": "Does the patient regularly get cold sores/blisters/oral lesions?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "collateral_value",
    "name": "Collateral Value",
    "category": "Loan",
    "description": "What is the estimated value of the collateral?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "company_description",
    "name": "Company Description",
    "category": "Bio",
    "description": "Tell us about your company. Elaborate as much as possible.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_company_name",
    "name": "Company Name",
    "category": "Company Detail",
    "description": "What is the name of this company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_company_type",
    "name": "Company Type",
    "category": "Company Detail",
    "description": "What type of company is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "company_detail_date_established",
    "name": "Date Established",
    "category": "Company Detail",
    "description": "On what date was this company established?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "company_detail_date_established.day",
    "name": "Date Established Day",
    "category": "Company Detail",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "company_detail_date_established.month",
    "name": "Date Established Month",
    "category": "Company Detail",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "company_detail_date_established.year",
    "name": "Date Established Year",
    "category": "Company Detail",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "company_detail_dba_name",
    "name": "DBA Name",
    "category": "Company Detail",
    "description": "What is the DBA name for this company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_ein",
    "name": "EIN",
    "category": "Company Detail",
    "description": "What is the EIN for this company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_gem_name",
    "name": "Gem Name",
    "category": "Company Detail",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_net_operating_income",
    "name": "Net Operating Income",
    "category": "Revenue & Income",
    "description": "What was the net operating income for this year?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "company_detail_number_of_employees",
    "name": "Number of Employees",
    "category": "Company Detail",
    "description": "How many employees does this company employ?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "company_detail_public_or_private",
    "name": "Public or Private",
    "category": "Company Detail",
    "description": "Is this company publically traded?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "company_detail_revenue_amount",
    "name": "Revenue Amount",
    "category": "Revenue & Income",
    "description": "What was the annunal revenue for this year?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "company_detail_revenue_detail_notes",
    "name": "Business Detail Notes",
    "category": "Company Detail",
    "description": "Enter any additional notes about this company.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_revenue_income_notes",
    "name": "Revenue & Income Notes",
    "category": "Revenue & Income",
    "description": "Enter any additional notes about the revenue and income for this year.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "company_detail_revenue_year",
    "name": "Revenue Year",
    "category": "Revenue & Income",
    "description": "What year is this revenue & income amount for?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "company_intranet",
    "name": "Company Intranet",
    "category": "Networking",
    "description": "What is the URL for the company intranet?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "company_wiki",
    "name": "Company Wiki",
    "category": "Networking",
    "description": "What is the URL for the company Wiki",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "conditions",
    "name": "Conditions",
    "category": "Health History",
    "description": "Please select any conditions this person has or had.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "considered_quitting_tobacco_use",
    "name": "Considered Quitting Tobacco Use",
    "category": "Health Information",
    "description": "Has this person considered quitting their tobacco use?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "contact_info_name",
    "name": "Gem Name",
    "category": "Contact Info",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_info_type",
    "name": "Contact Info Type",
    "category": "Contact Info",
    "description": "What kind of contact info is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "contact_lens_notes",
    "name": "Contact Lenses Notes",
    "category": "Vision",
    "description": "Enter any additional notes about this person's contact lens.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number",
    "name": "Contact Number",
    "category": "Health Insurance",
    "description": "What is the contact phone number for the health insurance provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.area_code",
    "name": "Contact Number Area Code",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.country_code",
    "name": "Contact Number Country Code",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.extension",
    "name": "Contact Number Extension",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.first_three",
    "name": "Contact Number First Three in Local Number",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.last_four",
    "name": "Contact Number Last Four in Local Number",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number.number",
    "name": "Contact Number Local Number",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account",
    "name": "Contact Number for Account",
    "category": "Investment Account",
    "description": "What is the phone number for support for this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.area_code",
    "name": "Contact Number for Account Area Code",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.country_code",
    "name": "Contact Number for Account Country Code",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.extension",
    "name": "Contact Number for Account Extension",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.first_three",
    "name": "Contact Number for Account First Three in Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.last_four",
    "name": "Contact Number for Account Last Four in Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contact_number_for_account.number",
    "name": "Contact Number for Account Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "contraception",
    "name": "Contraception",
    "category": "Health Information",
    "description": "What type of contraception does this person use?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "cooling_system",
    "name": "Cooling System",
    "category": "Home",
    "description": "What kind of cooling system does this home have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "coverage_notes",
    "name": "Coverage Notes",
    "category": "Renter's Insurance",
    "description": "Enter any additional notes about this coverage.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "coverage_type",
    "name": "Coverage Type",
    "category": "Health Insurance",
    "description": "What type of health insurance coverage is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "cred_rep_nickname",
    "name": "Gem Name",
    "category": "Credit Report",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_card_account_debited_during_auto_pay",
    "name": "Account Debited During Auto-Pay",
    "category": "Credit & Debit Card",
    "description": "If the card is paid automatically each month, which account is debited?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_card_auto_pay",
    "name": "Auto-Pay",
    "category": "Credit & Debit Card",
    "description": "Is this account set up to auto-pay?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "credit_card_number",
    "name": "Card Number",
    "category": "Credit & Debit Card",
    "description": "What is the card number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_name_on_card",
    "name": "Name on Card",
    "category": "Credit & Debit Card",
    "description": "What is the name as it appears on the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_notes",
    "name": "Credit & Debit Card Notes",
    "category": "Credit & Debit Card",
    "description": "Enter any additional notes about this credit or debit card.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_score_notes",
    "name": "Credit Score Notes",
    "category": "Credit Report",
    "description": "Enter any additional details about this credit score.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "credit_website_address",
    "name": "Website Address",
    "category": "Credit & Debit Card",
    "description": "What is the website address (URL) for this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "cuisines_you_prefer_to_avoid",
    "name": "Least Favorite Cuisine",
    "category": "Food Restrictions & Preferences",
    "description": "What are your least favorite cuisines?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "current_type_insurance",
    "name": "Current Type of Vehicle Insurance",
    "category": "Vehicle Insurance",
    "description": "What type of insurance is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "currently_pregnant",
    "name": "Currently Pregnant",
    "category": "Women's Health History",
    "description": "Is this person currently pregnant?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "dadcac_affiliation",
    "name": "Affiliation",
    "category": "DOD Common Access Card (CAC)",
    "description": "What military affiliation is this person a part of?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dadcac_expiration_date",
    "name": "Expiration Date",
    "category": "DOD Common Access Card (CAC)",
    "description": "When does this card expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "dadcac_federal_identifier",
    "name": "Federal Identifier",
    "category": "DOD Common Access Card (CAC)",
    "description": "What is the federal indentifier on this card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dadcac_pay_grade",
    "name": "Pay Grade",
    "category": "DOD Common Access Card (CAC)",
    "description": "What is this person's pay grade?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dadcac_rank",
    "name": "Rank",
    "category": "DOD Common Access Card (CAC)",
    "description": "What is this person's rank?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dadcac_service_agency",
    "name": "Service/Agency",
    "category": "DOD Common Access Card (CAC)",
    "description": "What military service/agency is this person a part of?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "date_of_last_complete_physical_exam",
    "name": "Date of Last Complete Physical Exam",
    "category": "Pet Health",
    "description": "When was their last physical exam?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "date_of_last_complete_physical_exam.day",
    "name": "Date of Last Complete Physical Exam Day",
    "category": "Pet Health",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "date_of_last_complete_physical_exam.month",
    "name": "Date of Last Complete Physical Exam Month",
    "category": "Pet Health",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "date_of_last_complete_physical_exam.year",
    "name": "Date of Last Complete Physical Exam Year",
    "category": "Pet Health",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "date_of_last_menstrual_period",
    "name": "Date of Last Menstrual Period",
    "category": "Women's Health History",
    "description": "When was this person's last menstrual period?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "date_roof_installed",
    "name": "Date Roof Installed",
    "category": "Home",
    "description": "When was the roof installed?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "deductible_car",
    "name": "Deductible",
    "category": "Vehicle Insurance",
    "description": "How much is the collision deductible?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "dental_implants",
    "name": "Dental implants",
    "category": "Dental History",
    "description": "Has the patient had any dental implants placed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "dental_notes",
    "name": "Dental Notes",
    "category": "Dental History",
    "description": "Enter any additional notes on your dental history.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dental_record",
    "name": "Gem Name",
    "category": "Dental History",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dentures",
    "name": "Dentures",
    "category": "Dental History",
    "description": "Does the patient wear a denture(s) or partial denture(s)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "description_of_child",
    "name": "Description of Person",
    "category": "Personality",
    "description": "In a few sentences, how would you describe this person?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "diphtheria_pertussis_tetanus_vaccine_date",
    "name": "Diphtheria, Pertussis, Tetanus Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their diphtheria, pertussis, tetanus (DtaP) vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "direction_notes",
    "name": "Directions Notes",
    "category": "Directions",
    "description": "Enter any additional notes about how to get to this location.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_appearance",
    "name": "Appearance",
    "category": "Directions",
    "description": "Describe any identifiable features of this location.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_driving_directions_to_address",
    "name": "Driving Directions to Location",
    "category": "Directions",
    "description": "What is the easiest way to drive to this location?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_nearest_cross_streets",
    "name": "Nearest Cross Streets",
    "category": "Directions",
    "description": "What is the nearest cross-street to this location?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_neighborhood",
    "name": "Neighborhood",
    "category": "Directions",
    "description": "What neighborhood is this location in?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_parking",
    "name": "Parking",
    "category": "Directions",
    "description": "Where is the best place to park near this location?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "directions_public_transit_directions_to_address",
    "name": "Public Transit Directions to Location",
    "category": "Directions",
    "description": "What is the easiest way to take public transportation to this location?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "discharge_from_nipples",
    "name": "Discharge from Nipples",
    "category": "Women's Health History",
    "description": "Does this person have disccharge from their nipples?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "disposition_remains",
    "name": "Disposition of Remains",
    "category": "Funeral Preferences",
    "description": "What would you like done with your remains?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "document_effective_date",
    "name": "Document Effective Date",
    "category": "Legal Documents",
    "description": "What is the effective date of this document?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "document_effective_date.day",
    "name": "Document Effective Date Day",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_effective_date.month",
    "name": "Document Effective Date Month",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_effective_date.year",
    "name": "Document Effective Date Year",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_location",
    "name": "Document Location",
    "category": "Legal Documents",
    "description": "Where is this document stored?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "document_name",
    "name": "Document Name",
    "category": "Legal Documents",
    "description": "What is the name of this document?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "document_notes",
    "name": "Document Notes",
    "category": "Legal Documents",
    "description": "Enter any additional notes about this document.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "document_review_date",
    "name": "Document Review Date",
    "category": "Legal Documents",
    "description": "When was this document last reviewed?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "document_review_date.day",
    "name": "Document Review Date Day",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_review_date.month",
    "name": "Document Review Date Month",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_review_date.year",
    "name": "Document Review Date Year",
    "category": "Legal Documents",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "document_sharing",
    "name": "Document Sharing",
    "category": "Networking",
    "description": "What is the URL for any other document sharing sites the company uses?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "document_sharing_purpose",
    "name": "Document Sharing Purpose",
    "category": "Networking",
    "description": "What is this used for?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dodcac_gem_name",
    "name": "Gem Name",
    "category": "DOD Common Access Card (CAC)",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "donation_affiliation",
    "name": "Donation Frequency",
    "category": "Charity",
    "description": "How frequently do you donate to this charity?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "donation_amount",
    "name": "Donation Amount",
    "category": "Charity",
    "description": "What is the amount that you typically donate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "dress_shirt_style",
    "name": "Dress Shirt Preferences",
    "category": "Men's Clothing Preferences",
    "description": "What are your dress shirt preferences?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "dress_style",
    "name": "Dress Style",
    "category": "Women's Clothing Preferences",
    "description": "What style of dresses do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "drivers_licence_notes",
    "name": "Driver's License Notes",
    "category": "Driver's License",
    "description": "Enter any additional details about this driver's license.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "drivers_license_expiration_date",
    "name": "Driver's License Expiration Date",
    "category": "Driver's License",
    "description": "When does the driver's license expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "drivers_license_expiration_date.day",
    "name": "Driver's License Expiration Date Day",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_expiration_date.month",
    "name": "Driver's License Expiration Date Month",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_expiration_date.year",
    "name": "Driver's License Expiration Date Year",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_issue_date",
    "name": "Driver's License Issue Date",
    "category": "Driver's License",
    "description": "What date was the driver's license issued?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "drivers_license_issue_date.day",
    "name": "Driver's License Issue Date Day",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_issue_date.month",
    "name": "Driver's License Issue Date Month",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_issue_date.year",
    "name": "Driver's License Issue Date Year",
    "category": "Driver's License",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "drivers_license_nickname",
    "name": "Gem Name",
    "category": "Driver's License",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "drivers_license_number",
    "name": "Driver's License Number",
    "category": "Driver's License",
    "description": "What is the driver's license number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "drivers_restrictions",
    "name": "Driver's Restrictions",
    "category": "Driver's License",
    "description": "What restrictions, if any, does this driver's license have listed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_activities",
    "name": "Activities",
    "category": "Education",
    "description": "Describe any activities you were involved in at this school.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_awards",
    "name": "Awards",
    "category": "Education",
    "description": "Describe any awards you received while attending this school.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_credits",
    "name": "Education Credits",
    "category": "Tax & Income",
    "description": "What was the total education credits claimed?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "education_degree_received",
    "name": "Degree Received",
    "category": "Education",
    "description": "What degree did you receive from this school?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_end_date",
    "name": "End Date",
    "category": "Education",
    "description": "When did you leave this school?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "education_field_of_study",
    "name": "Field of Study",
    "category": "Education",
    "description": "What was your field of study?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_gem_name",
    "name": "Gem Name",
    "category": "Education",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_graduation_year",
    "name": "Graduation Year",
    "category": "Education",
    "description": "What year did you graduate from this school?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_notes",
    "name": "Education Notes",
    "category": "Education",
    "description": "Enter any additional notes about this school.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "education_start_date",
    "name": "Start Date",
    "category": "Education",
    "description": "When did you start attending this school?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "education_student_id",
    "name": "Student ID",
    "category": "Education",
    "description": "What is your student ID number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "employment_income",
    "name": "Employment Income",
    "category": "Tax & Income",
    "description": "What was the total income earned from work?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "equifax_credit_score",
    "name": "Equifax Score",
    "category": "Credit Report",
    "description": "What is the Equifax score?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service",
    "name": "Equifax Customer Service",
    "category": "Credit Report",
    "description": "What is the customer service phone number for Equifax?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.area_code",
    "name": "Equifax Customer Service Area Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.country_code",
    "name": "Equifax Customer Service Country Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.extension",
    "name": "Equifax Customer Service Extension",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.first_three",
    "name": "Equifax Customer Service First Three in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.last_four",
    "name": "Equifax Customer Service Last Four in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_customer_service.number",
    "name": "Equifax Customer Service Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "equifax_score_date",
    "name": "Equifax Score Date",
    "category": "Credit Report",
    "description": "What is the most recent date when the Equifax score was checked?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "equifax_score_date.day",
    "name": "Equifax Score Date Day",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "equifax_score_date.month",
    "name": "Equifax Score Date Month",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "equifax_score_date.year",
    "name": "Equifax Score Date Year",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "equifax_website",
    "name": "Equifax Website",
    "category": "Credit Report",
    "description": "What is the Equifax website?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "essen_warranty_notes",
    "name": "Warranty Notes",
    "category": "Warranty",
    "description": "Enter any additional notes about this warranty.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "ever_pregnant",
    "name": "Ever Pregnant",
    "category": "Women's Health History",
    "description": "Has this person ever been pregnant?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "exercise_frequency",
    "name": "Exercise Frequency",
    "category": "Health Information",
    "description": "How often does this person exercise?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "exercise_habits",
    "name": "Exercise Habits",
    "category": "Health Information",
    "description": "Does this person exercise regularly?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "exercise_level",
    "name": "Exercise Level",
    "category": "Health Information",
    "description": "What level of exercise does this person get?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "experian_customer_service",
    "name": "Experian Customer Service",
    "category": "Credit Report",
    "description": "What is the customer service phone number for Experian?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.area_code",
    "name": "Experian Customer Service Area Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.country_code",
    "name": "Experian Customer Service Country Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.extension",
    "name": "Experian Customer Service Extension",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.first_three",
    "name": "Experian Customer Service First Three in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.last_four",
    "name": "Experian Customer Service Last Four in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_customer_service.number",
    "name": "Experian Customer Service Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_score",
    "name": "Experian Score",
    "category": "Credit Report",
    "description": "What is the Experian score?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "experian_score_date",
    "name": "Experian Score Date",
    "category": "Credit Report",
    "description": "What is the most recent date when the Experian score was checked?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "experian_score_date.day",
    "name": "Experian Score Date Day",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "experian_score_date.month",
    "name": "Experian Score Date Month",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "experian_score_date.year",
    "name": "Experian Score Date Year",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "experian_website",
    "name": "Experian Website",
    "category": "Credit Report",
    "description": "What is the Experian website?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "expiration_date",
    "name": "Card Expiration Date",
    "category": "Credit & Debit Card",
    "description": "What is the expiration date for this card?",
    "privatePData": null,
    "semanticType": "date.month",
    "uri": null
  },
  {
    "id": "expiration_date.month",
    "name": "Card Expiration Date Month",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "expiration_date.year",
    "name": "Card Expiration Date Year",
    "category": "Credit & Debit Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "expiration_date_for_id",
    "name": "Expiration Date for ID",
    "category": "Trusted Traveler",
    "description": "What is the expiration date for this ID?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "extended_warranty_number",
    "name": "Extended Warranty Number",
    "category": "Warranty",
    "description": "What is the extended warranty number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warranty_provider",
    "name": "Extended Warranty Provider",
    "category": "Warranty",
    "description": "Who is the extended warranty provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone",
    "name": "Extended Warranty Phone",
    "category": "Warranty",
    "description": "What is the extended warranty contact phone number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.area_code",
    "name": "Extended Warranty Phone Area Code",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.country_code",
    "name": "Extended Warranty Phone Country Code",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.extension",
    "name": "Extended Warranty Phone Extension",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.first_three",
    "name": "Extended Warranty Phone First Three in Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.last_four",
    "name": "Extended Warranty Phone Last Four in Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "extended_warrranty_phone.number",
    "name": "Extended Warranty Phone Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "eyes_notes",
    "name": "Vision Notes",
    "category": "Vision",
    "description": "Enter any additional notes about this person's eyes.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fabrics",
    "name": "Fabrics",
    "category": "Women's Clothing Preferences",
    "description": "Which fabrics do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "facebook_profile",
    "name": "Facebook Profile",
    "category": "Contact Info",
    "description": "What is the URL of the Facebook profile?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "favorite_clothing_colors",
    "name": "Favorite Clothing Colors",
    "category": "Women's Clothing Preferences",
    "description": "What basic colors do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "favorite_cuisines",
    "name": "Favorite Cuisines",
    "category": "Food Restrictions & Preferences",
    "description": "What are your favorite cuisines?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "favorite_department_stores",
    "name": "Favorite Department Stores",
    "category": "Women's Clothing Preferences",
    "description": "What is your favorite department store",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "favorite_sermons_hymns",
    "name": "Favorite Sermons/Hymns",
    "category": "Funeral Preferences",
    "description": "What sermons or hymns would you like at the service?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support",
    "name": "Fax Number for Support",
    "category": "Investment Account",
    "description": "What is the fax number for this account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.area_code",
    "name": "Fax Number for Support Area Code",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.country_code",
    "name": "Fax Number for Support Country Code",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.extension",
    "name": "Fax Number for Support Extension",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.first_three",
    "name": "Fax Number for Support First Three in Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.last_four",
    "name": "Fax Number for Support Last Four in Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fax_number_for_support.number",
    "name": "Fax Number for Support Local Number",
    "category": "Investment Account",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fearful_of_dental_treatment",
    "name": "Fearful of Dental Treatment",
    "category": "Dental History",
    "description": "Is the patient  fearful of dental treatment?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "federal_income_tax",
    "name": "Federal Income Tax",
    "category": "Tax & Income",
    "description": "What was the federal income tax witholding?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "filing_status",
    "name": "Filing Status",
    "category": "Tax & Income",
    "description": "What filing status was this tax return submitted with?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "fillings",
    "name": "Fillings",
    "category": "Dental History",
    "description": "Has the patient had one or more fillings in the last three years?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "fireplace",
    "name": "Fireplace",
    "category": "Home",
    "description": "How many fireplaces does this home have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "fireplace_type",
    "name": "Fireplace Type",
    "category": "Home",
    "description": "Does this home have a wood-burning or gas fireplace?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "first_name_id_card",
    "name": "First Name on ID Card",
    "category": "ID Card",
    "description": "What is the first name on this ID card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "first_name_on_birth_certificate",
    "name": "First Name",
    "category": "Birth Certificate",
    "description": "What is the first name as it appears on the birth certificate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "first_name_on_card",
    "name": "First Name on Card",
    "category": "DOD Common Access Card (CAC)",
    "description": "What is the first name on the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "first_name_on_drivers_license",
    "name": "First Name",
    "category": "Driver's License",
    "description": "What is the first name as it appears on the driver's license?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "first_name_on_passport",
    "name": "First Name",
    "category": "Passport",
    "description": "What is the first name as it appears on the passport?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "first_name_on_social_security_card",
    "name": "First Name",
    "category": "Social Security Card",
    "description": "What is the first name as it appears on the social security card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "fixed_or_adjustable_rate",
    "name": "Fixed or Adjustable Rate",
    "category": "Loan",
    "description": "Is the interest rate fixed or adjustable?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "flood_insurance_policy_coverage",
    "name": "Flood Insurance Policy Coverage",
    "category": "Home Insurance",
    "description": "What is the coverage limit for the flood insurance policy?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "flood_insurance_policy_number",
    "name": "Flood Insurance Policy Number",
    "category": "Home Insurance",
    "description": "What is the flood insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "flood_insurance_policy_premium",
    "name": "Flood Insurance Annual Premium",
    "category": "Home Insurance",
    "description": "What is the annual premium for the flood insurance policy?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "floss_habits",
    "name": "Floss Habits",
    "category": "Dental History",
    "description": "Does this person regularly floss their teeth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_allergies",
    "name": "Food Allergies",
    "category": "Allergies",
    "description": "Is this person allergic to any of the following foods?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_in_teeth",
    "name": "Food in Teeth",
    "category": "Dental History",
    "description": "Does the patient's food catch between his/her teeth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_dessert",
    "name": "Dessert",
    "category": "Food Restrictions & Preferences",
    "description": "What are your favorite desserts?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_diet",
    "name": "Diet",
    "category": "Food Restrictions & Preferences",
    "description": "Are you currently on any of the following diets?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_dietary_restrictions",
    "name": "Dietary Restrictions",
    "category": "Food Restrictions & Preferences",
    "description": "Which, if any, of the following dietary restrictions do you have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_favorite_drinks",
    "name": "Favorite Drinks",
    "category": "Food Restrictions & Preferences",
    "description": "What are this child’s favorite drinks?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_favorite_flavor",
    "name": "Favorite Flavor",
    "category": "Food Restrictions & Preferences",
    "description": "What is your favorite dessert flavor?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_favorite_food",
    "name": "Favorite Food",
    "category": "Food Restrictions & Preferences",
    "description": "What are your favorite foods?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_favorite_vegetables",
    "name": "Favorite Vegetables",
    "category": "Food Restrictions & Preferences",
    "description": "What vegetables do you like to eat?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_favourite_solid_food",
    "name": "Favorite Solid Foods",
    "category": "Food Restrictions & Preferences",
    "description": "What are this child’s favorite solid foods?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_fish_preferences",
    "name": "Fish Preferences",
    "category": "Food Restrictions & Preferences",
    "description": "What type of fish do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_food_adventurousness",
    "name": "Food Adventurousness",
    "category": "Food Restrictions & Preferences",
    "description": "How adventurous of an eater are you?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_formula_or_breast_milk",
    "name": "Formula or Breast Milk",
    "category": "Food Restrictions & Preferences",
    "description": "Does this child drink formula or breast milk?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_fruits_you_dislike",
    "name": "Fruits You Dislike",
    "category": "Food Restrictions & Preferences",
    "description": "Are there fruits you dislike?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_infant_baby_notes",
    "name": "Infant & Baby Notes",
    "category": "Food Restrictions & Preferences",
    "description": "Enter any additional notes about this infant or babies food preferences.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_last_favorite_drinks",
    "name": "Least Favorite Drinks",
    "category": "Food Restrictions & Preferences",
    "description": "What are this child's least favorite drinks?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_last_favourite_solid_food",
    "name": "Least Favorite Solid Foods",
    "category": "Food Restrictions & Preferences",
    "description": "What are this child's least favorite solid foods?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_least_favorite_food",
    "name": "Least Favorite Foods",
    "category": "Food Restrictions & Preferences",
    "description": "What is your least favorite food?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_notes",
    "name": "Food Preference Notes",
    "category": "Food Restrictions & Preferences",
    "description": "Enter any additional notes on your food preferences.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "food_pref_organic_food_fan",
    "name": "Organic Food Fan",
    "category": "Food Restrictions & Preferences",
    "description": "Do you care if your food is organic or locally grown?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_preferred_formula",
    "name": "Preferred Formula",
    "category": "Food Restrictions & Preferences",
    "description": "What is your preferred formula?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_preferred_fruits",
    "name": "Preferred Fruits",
    "category": "Food Restrictions & Preferences",
    "description": "Which of the following fruits do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_preferred_meats",
    "name": "Meat Preferences",
    "category": "Food Restrictions & Preferences",
    "description": "What type of meat do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_preferred_starches",
    "name": "Preferred Starches",
    "category": "Food Restrictions & Preferences",
    "description": "What types of starches do you like to eat?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_religious_dietary_restrictions",
    "name": "Religious Dietary Restrictions",
    "category": "Food Restrictions & Preferences",
    "description": "Which, if any, of the following religious dietary customs do you follow?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_shellfish_preferences",
    "name": "Shellfish Preferences",
    "category": "Food Restrictions & Preferences",
    "description": "Which of the following shellfish do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_solid_food",
    "name": "Solid Food",
    "category": "Food Restrictions & Preferences",
    "description": "Does this child eat solid foods?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_spiciness",
    "name": "Spiciness",
    "category": "Food Restrictions & Preferences",
    "description": "Do you like spicy foods?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_vegetables_you_dislike",
    "name": "Vegetables You Dislike",
    "category": "Food Restrictions & Preferences",
    "description": "Are there vegetables you dislike",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_pref_vegetarian",
    "name": "Vegetarian",
    "category": "Food Restrictions & Preferences",
    "description": "Are you a vegetarian?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "food_preferences_food_preference_name",
    "name": "Gem Name",
    "category": "Food Restrictions & Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "frequency_of_tobacco_use",
    "name": "Frequency of Tobacco Use",
    "category": "Health Information",
    "description": "Approximately how many cigarettes / cigars / pipes does this person consume per day?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_donations",
    "name": "Donations",
    "category": "Funeral Preferences",
    "description": "To what organization should people make donations?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_flowers",
    "name": "Flowers",
    "category": "Funeral Preferences",
    "description": "What flower requests do you have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_home",
    "name": "Funeral Home",
    "category": "Funeral Preferences",
    "description": "Which funeral home?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_music",
    "name": "Music",
    "category": "Funeral Preferences",
    "description": "Which music would you like?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_notes",
    "name": "Funeral Notes",
    "category": "Funeral Preferences",
    "description": "Enter any additional notes about these funeral plans.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_obiturary",
    "name": "Obiturary",
    "category": "Funeral Preferences",
    "description": "Where should the obituary be placed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_preferences_gem",
    "name": "Gem Name",
    "category": "Funeral Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "funeral_service",
    "name": "Funeral Service",
    "category": "Funeral Preferences",
    "description": "What type of funeral service would you like?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "girls_clothing_nickname",
    "name": "Gem Name",
    "category": "Kid's Clothing Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "girls_clothing_preferences_notes",
    "name": "Kid's Clothing Preferences Notes",
    "category": "Kid's Clothing Preferences",
    "description": "Enter any additional notes about your girls clothing preferences.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "girls_favorite_brands",
    "name": "Favorite Brands",
    "category": "Kid's Clothing Preferences",
    "description": "What are your favorite children's clothing brands?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_favorite_characters",
    "name": "Favorite Characters",
    "category": "Kid's Clothing Preferences",
    "description": "What are your child's favorite characters or television shows?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_favorite_colors",
    "name": "Favorite Colors",
    "category": "Kid's Clothing Preferences",
    "description": "What clothing colors do you typically buy for your child?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_favorite_sports_teams",
    "name": "Favorite Sports Teams",
    "category": "Kid's Clothing Preferences",
    "description": "What are your families favorite sports teams?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_favorite_stores",
    "name": "Favorite Stores",
    "category": "Kid's Clothing Preferences",
    "description": "What are your child's favorite clothing stores?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_notes",
    "name": "Kid's Clothing Notes",
    "category": "Kid's Clothing Preferences",
    "description": "Enter any additional notes about your girls clothing basics.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "girls_pant_style",
    "name": "Pant Style",
    "category": "Kid's Clothing Preferences",
    "description": "What style of pants do you typically buy for your child?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_shirt_colors",
    "name": "Shirt Colors",
    "category": "Kid's Clothing Preferences",
    "description": "What color shirt do you typically buy for your child?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_shirt_style",
    "name": "Shirt Style",
    "category": "Kid's Clothing Preferences",
    "description": "What style of shirt do you typically buy for your child?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "girls_style_preference",
    "name": "Style preference",
    "category": "Kid's Clothing Preferences",
    "description": "What style clothing do you typically buy for your child?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "grant_amount_remaining",
    "name": "Grant Amount Remaining",
    "category": "Grant",
    "description": "What is the amount remaining to be paid out?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "grant_award_amount",
    "name": "Grant Award Amount",
    "category": "Grant",
    "description": "What is the amount awarded from this grant?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "grant_award_year",
    "name": "Grant Award Year",
    "category": "Grant",
    "description": "What year(s) does this grant apply to?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "grant_disbursed_amount",
    "name": "Grant Disbursed Amount",
    "category": "Grant",
    "description": "What is the amount disbursed for this grant?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "grant_gem_name",
    "name": "Gem Name",
    "category": "Grant",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "grant_notes",
    "name": "Grant Notes",
    "category": "Grant",
    "description": "Enter any additional notes about this grant.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "grant_scheduled_amount",
    "name": "Grant Scheduled Amount",
    "category": "Grant",
    "description": "What is the grant scheduled amount?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "group_number",
    "name": "Group Number",
    "category": "Health Insurance",
    "description": "What is the group number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "gum_bleeding",
    "name": "Gum Bleeding",
    "category": "Dental History",
    "description": "Does the patient have sore, bleeding gums?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "guns_in_home",
    "name": "Guns in Home",
    "category": "Health Information",
    "description": "Does this person keep guns in their home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "haemophilus_influenza_type_b_vaccine_date",
    "name": "Haemophilus Influenza Type B Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the haemophilus influenza vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "health_basic_alcohol_use",
    "name": "Alcohol Use",
    "category": "Health Information",
    "description": "How often does this person drink alcohol?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_basic_blood_type",
    "name": "Blood Type",
    "category": "Health Information",
    "description": "What is this person's blood type?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_basic_drug_use",
    "name": "Drug Use",
    "category": "Health Information",
    "description": "Does this person use recreational drugs?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_basic_tobacco_use",
    "name": "Tobacco Use",
    "category": "Health Information",
    "description": "Does this person regularly use tobacco?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_care_plan",
    "name": "Health Care Plan",
    "category": "Health Insurance",
    "description": "What type of health care plan or program is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_employer",
    "name": "Employer",
    "category": "Health Insurance",
    "description": "What employer is this policy under?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_end_date",
    "name": "End Date",
    "category": "Health Insurance",
    "description": "When did this insurance coverage end?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "health_end_date.day",
    "name": "End Date Day",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_end_date.month",
    "name": "End Date Month",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_end_date.year",
    "name": "End Date Year",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_history_name",
    "name": "Gem Name",
    "category": "Health History",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_history_notes",
    "name": "Health History Notes",
    "category": "Health History",
    "description": "Enter any notes about this health history record.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_insu_co_insurance",
    "name": "Co-Insurance",
    "category": "Health Insurance",
    "description": "What is the co-insurance ratio?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_insu_co_pay",
    "name": "Co-Pay",
    "category": "Health Insurance",
    "description": "What is the copay amount?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_insu_deductible",
    "name": "Deductible",
    "category": "Health Insurance",
    "description": "What is the deductible on this policy?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_insu_lifetime_maximum",
    "name": "Lifetime Maximum",
    "category": "Health Insurance",
    "description": "What is the lifetime maximum?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_insu_out_of_pocket_maximum",
    "name": "Out of Pocket Maximum",
    "category": "Health Insurance",
    "description": "What is the yearly out of pocket maximum?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_insurance_name",
    "name": "Gem Name",
    "category": "Health Insurance",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_insurance_notes",
    "name": "Health Insurance Notes",
    "category": "Health Insurance",
    "description": "Enter any additional notes about this health insurance.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_insurance_provider",
    "name": "Insurance Provider",
    "category": "Health Insurance",
    "description": "Who is the health insurance provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_policy_number",
    "name": "Policy Number",
    "category": "Health Insurance",
    "description": "What is the health insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_record_name",
    "name": "Gem Name",
    "category": "Health Information",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_record_relationship",
    "name": "Health Record Relationship",
    "category": "Health History",
    "description": "Who is this Health Record for?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "health_start_date",
    "name": "Start Date",
    "category": "Health Insurance",
    "description": "When did this insurance coverage begin?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "health_start_date.day",
    "name": "Start Date Day",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_start_date.month",
    "name": "Start Date Month",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_start_date.year",
    "name": "Start Date Year",
    "category": "Health Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "health_stats_height",
    "name": "Height",
    "category": "Health Information",
    "description": "How tall is this person?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "health_stats_weight",
    "name": "Weight",
    "category": "Health Information",
    "description": "How much does this person weight?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "heating_system",
    "name": "Heating System",
    "category": "Home",
    "description": "What kind of heating system does this home have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "hepatitis_a_vaccine_date",
    "name": "Hepatitis A Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the hepatitis A vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "hepatitis_b_vaccine_date",
    "name": "Hepatitis B Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the hepatitis B vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "hib_vaccine_date",
    "name": "Hib Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the Hib vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "history_of_decay",
    "name": "History of Decay",
    "category": "Dental History",
    "description": "Does the patient have a family history of extensive decay?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "history_of_periodontal_disease",
    "name": "History of Periodontal Disease",
    "category": "Dental History",
    "description": "Does the patient have a family history of periodontal disease?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_annual_premium",
    "name": "Annual Premium",
    "category": "Home Insurance",
    "description": "What is the annual premium for this policy?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "home_basement",
    "name": "Basement",
    "category": "Home",
    "description": "Does this home have a basement?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basement_type",
    "name": "Basement Type",
    "category": "Home",
    "description": "What type of basement does this home have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_ceiling_height",
    "name": "Ceiling Height",
    "category": "Home",
    "description": "How tall are your ceilings?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_custom_kitchen",
    "name": "Custom Kitchen",
    "category": "Home",
    "description": "Do you have a custom kitchen?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_electrical_wiring_type",
    "name": "Electrical Wiring Type",
    "category": "Home",
    "description": "What type of electrical wiring do you have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_exterior_siding",
    "name": "Exterior Siding",
    "category": "Home",
    "description": "What type of exterior siding does this home have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_garage_car_capacity",
    "name": "Garage Car Capacity",
    "category": "Home",
    "description": "How many cars does your garage hold?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_interior_wall_construction",
    "name": "Interior Wall Construction",
    "category": "Home",
    "description": "What material are your interior walls made of?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_roofing_material",
    "name": "Roofing Material",
    "category": "Home",
    "description": "What material is your roof made of?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basic_type_of_garage",
    "name": "Type of Garage",
    "category": "Home",
    "description": "What type of garage do you have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "home_basics_notes",
    "name": "Home Details Notes",
    "category": "Home",
    "description": "Enter any additional notes about this home.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "home_basics_property_details_notes",
    "name": "Property Details Notes",
    "category": "Home",
    "description": "Enter any additional notes about the details of this property.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "home_insurance_company_website",
    "name": "Home Insurance Company Website",
    "category": "Home Insurance",
    "description": "What is the website address for the home insurance provider?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "home_insurance_notes",
    "name": "Home Insurance Notes",
    "category": "Home Insurance",
    "description": "Enter any additional details about your home insurance.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "home_neighborhood",
    "name": "Neighborhood",
    "category": "Home",
    "description": "In which neighborhood is this home located?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "home_nickname",
    "name": "Gem Name",
    "category": "Rental",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "home_riders",
    "name": "Riders",
    "category": "Home Insurance",
    "description": "What, if any, riders do you have on this policy?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "homeowners_deductible",
    "name": "Deductible",
    "category": "Home Insurance",
    "description": "What is the deductible?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "homeowners_insurance_provider",
    "name": "Insurance Provider",
    "category": "Home Insurance",
    "description": "Who is the homeowners insurance provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "hormone_medication",
    "name": "Hormone Medication",
    "category": "Women's Health History",
    "description": "Is this person on a hormone medication?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "household_indoor_allergies",
    "name": "Household/Indoor Allergies",
    "category": "Allergies",
    "description": "Is this person allergic to any of the following household items?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "hpv_vaccine_date",
    "name": "HPV Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the HPV vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "hysterectomy",
    "name": "Hysterectomy",
    "category": "Women's Health History",
    "description": "Has this person had a hysterectomy (if yes, what type)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "id_card_expiration_date",
    "name": "ID Card Expiration Date",
    "category": "ID Card",
    "description": "When does this ID card expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "id_card_expiration_date.day",
    "name": "ID Card Expiration Date Day",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_expiration_date.month",
    "name": "ID Card Expiration Date Month",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_expiration_date.year",
    "name": "ID Card Expiration Date Year",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_gem",
    "name": "Gem Name",
    "category": "ID Card",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "id_card_issue_date",
    "name": "ID Card Issue Date",
    "category": "ID Card",
    "description": "When was this ID card issued?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "id_card_issue_date.day",
    "name": "ID Card Issue Date Day",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_issue_date.month",
    "name": "ID Card Issue Date Month",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_issue_date.year",
    "name": "ID Card Issue Date Year",
    "category": "ID Card",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "id_card_notes",
    "name": "ID Card Notes",
    "category": "ID Card",
    "description": "Enter any additional details about this ID Card.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "identification_number",
    "name": "Identification Number",
    "category": "ID Card",
    "description": "What is the identification number on this card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "identity_first_name",
    "name": "First Name",
    "category": "Personal Profile",
    "description": "What first name do you prefer to go by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "identity_last_name",
    "name": "Last Name",
    "category": "Personal Profile",
    "description": "What is your last name?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "if_the_alarm_goes_off",
    "name": "If The Alarm Goes Off",
    "category": "Alarm System",
    "description": "What are the special instructions if the alarm happens to go off? What will happen?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "im_provider",
    "name": "IM Provider Name",
    "category": "Instant Messaging",
    "description": "Which provider is this account with?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "im_screen_name",
    "name": "IM Username",
    "category": "Instant Messaging",
    "description": "What is the username for that provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "immunizations_screenings_name",
    "name": "Gem Name",
    "category": "Immunizations & Screenings",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "influenza_vaccine_date",
    "name": "Influenza Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the influenza vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "instant_messaging_name",
    "name": "Gem Name",
    "category": "Instant Messaging",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "instructions_for_opening",
    "name": "Instructions for Opening",
    "category": "Combination Locks",
    "description": "Enter any special instructions necessary for opening this lock.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "instructions_ingredients_materials",
    "name": "Ingredients / Materials",
    "category": "Recipes & Instructions",
    "description": "What ingredients or materials are needed for this task?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "instructions_name",
    "name": "Gem Name",
    "category": "Recipes & Instructions",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "instructions_notes",
    "name": "Instructions Notes",
    "category": "Recipes & Instructions",
    "description": "Enter any additional notes about these instructions.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "instructions_reference_link",
    "name": "Reference Link",
    "category": "Recipes & Instructions",
    "description": "Where can you learn more?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "instructions_steps",
    "name": "Steps",
    "category": "Recipes & Instructions",
    "description": "What are the steps needed to complete this task?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "insurance_claim_notes",
    "name": "Insurance Claim Notes",
    "category": "Vehicle Accident",
    "description": "Enter any additional details about your insurance claim information.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "insurance_nickname",
    "name": "Gem Name",
    "category": "Home Insurance",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "insurance_provider",
    "name": "Vehicle Insurance Provider",
    "category": "Vehicle Insurance",
    "description": "Who is the current auto insurance provider?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "insured_vehicle",
    "name": "Insured Vehicle",
    "category": "Vehicle Insurance",
    "description": "What type of vehicle is this insurance for?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "interior_color",
    "name": "Interior Color",
    "category": "Vehicle",
    "description": "What is the interior color of your vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "intranet_contents",
    "name": "Intranet Contents",
    "category": "Networking",
    "description": "What can you find here?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "jaw_noises",
    "name": "Jaw Noises",
    "category": "Dental History",
    "description": "Does the patient hear popping, clicking or snapping in your jaw?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "jaw_pain",
    "name": "Jaw Pain",
    "category": "Dental History",
    "description": "Does the patient have jaw, head or neck pain?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "jeans_style",
    "name": "Jeans Style",
    "category": "Women's Clothing Preferences",
    "description": "Why style jeans do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "jeans_wash",
    "name": "Jeans Wash",
    "category": "Women's Clothing Preferences",
    "description": "Which denim washes do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "key_equities_or_financial_instruments",
    "name": "Key Equities or Financial Instruments",
    "category": "Investment Account",
    "description": "Share more specifics about this particular investment account.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "kid_pers_childs_nickname",
    "name": "Gem Name",
    "category": "Personality",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "kids_person_notes",
    "name": "Personality Notes",
    "category": "Personality",
    "description": "Enter any additional notes about this person's personality.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "kids_routine_end_time",
    "name": "Activity End Time",
    "category": "Routine",
    "description": "What time of day does this activity end?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "kids_routine_name",
    "name": "Activity Name",
    "category": "Routine",
    "description": "What activity takes place at this time?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "kids_routine_note",
    "name": "Activity Notes",
    "category": "Routine",
    "description": "Enter any additional notes about this activity.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "kids_routine_time",
    "name": "Activity Start Time",
    "category": "Routine",
    "description": "What time of day does this activity start?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "known_traveler_id",
    "name": "Known Traveler ID",
    "category": "Trusted Traveler",
    "description": "What is this traveler's Known Traveler ID?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "landlords_name",
    "name": "Rent Payment To",
    "category": "Rental",
    "description": "Who should the rent check be made out to?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_abdominal_aortic_aneurysm_screen",
    "name": "Last Abdominal Aortic Aneurysm Screen",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last abdominal aortic aneurysm test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_blood_pressure_test",
    "name": "Last Blood Pressure Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last blood pressure test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_bone_density_test",
    "name": "Last Bone Density Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last bone density test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_cardiac_stress_test",
    "name": "Last Cardiac Stress Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last cardiac stress test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_carotid_ultrasound",
    "name": "Last Carotid Ultrasound",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last carotid ultrasound?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_cholesterol_test",
    "name": "Last Cholesterol Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last cholesterol test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_cleaning",
    "name": "Last Cleaning",
    "category": "Dental History",
    "description": "When was the last cleaning?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_cleaning.day",
    "name": "Last Cleaning Day",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_cleaning.month",
    "name": "Last Cleaning Month",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_cleaning.year",
    "name": "Last Cleaning Year",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_colon_cancer_screening",
    "name": "Last Colon Cancer Screening",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last colon cancer screening?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_colonoscopy",
    "name": "Last Colonoscopy",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last colonoscopy?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_full_x_ray",
    "name": "Last Full X-Ray",
    "category": "Dental History",
    "description": "When was the last full x-ray?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_full_x_ray.day",
    "name": "Last Full X-Ray Day",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_full_x_ray.month",
    "name": "Last Full X-Ray Month",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_full_x_ray.year",
    "name": "Last Full X-Ray Year",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_healthy_check_up",
    "name": "Last Healthy Check-Up",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last healthy check-up?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_hearing_test",
    "name": "Last Hearing Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last hearing test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_hiv_test",
    "name": "Last HIV Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last HIV test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_mammogram",
    "name": "Last Mammogram",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last mammogram?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_name_id_card",
    "name": "Last Name on ID Card",
    "category": "ID Card",
    "description": "What is the last name on this ID card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_name_on_birth_certificate",
    "name": "Last Name",
    "category": "Birth Certificate",
    "description": "What is the last name as it appears on the birth certificate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_name_on_card",
    "name": "Last Name on Card",
    "category": "DOD Common Access Card (CAC)",
    "description": "What is the last name on the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_name_on_drivers_license",
    "name": "Last Name",
    "category": "Driver's License",
    "description": "What is the last name as it appears on their driver's license?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_name_on_passport",
    "name": "Last Name",
    "category": "Passport",
    "description": "What is the last name as it appears on the passport?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_name_on_social_security_card",
    "name": "Last Name",
    "category": "Social Security Card",
    "description": "What is the last name as it appears on the social security card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "last_pap_test",
    "name": "Last PAP Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last PAP smear?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_partial_x_ray",
    "name": "Last Partial X-Ray",
    "category": "Dental History",
    "description": "When was the last partial x-ray?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_partial_x_ray.day",
    "name": "Last Partial X-Ray Day",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_partial_x_ray.month",
    "name": "Last Partial X-Ray Month",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_partial_x_ray.year",
    "name": "Last Partial X-Ray Year",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_protrate_exam",
    "name": "Last Protrate Exam",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last prostate exam?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_sexually_transmitted_disease_test",
    "name": "Last Sexually Transmitted Disease Test",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last STD screening?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_skin_check",
    "name": "Last Skin Check",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last skin check?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_tb_skin_test",
    "name": "Last TB Skin Test (TST)",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive their last TB skin test (TST)?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_visit",
    "name": "Last Visit",
    "category": "Dental History",
    "description": "When was the patient's last visit?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "last_visit.day",
    "name": "Last Visit Day",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_visit.month",
    "name": "Last Visit Month",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "last_visit.year",
    "name": "Last Visit Year",
    "category": "Dental History",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "least_favorite_clothing_colors",
    "name": "Least Favorite Clothing Colors",
    "category": "Women's Clothing Preferences",
    "description": "What basic colors don't you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "left_eye",
    "name": "Left Eye",
    "category": "Vision",
    "description": "What is the glasses prescription for the left eye?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "left_eye_access",
    "name": "Left Eye Axis",
    "category": "Vision",
    "description": "What is the left eye axis measurement?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "left_eye_bc",
    "name": "Left Eye BC",
    "category": "Vision",
    "description": "What is the BC for the left eye? (BC is Base Curve and is usually an 8.x or 9.x number)",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "left_eye_cylinder",
    "name": "Left Eye Cylinder",
    "category": "Vision",
    "description": "What is the measurement for the left eye cylinder?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "left_eye_dia",
    "name": "Left Eye DIA",
    "category": "Vision",
    "description": "What is the DIA for the left eye? (diameter usually falls between 13.x and 15.x)",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "left_eye_power",
    "name": "Left Eye Power",
    "category": "Vision",
    "description": "What is the power for the left eye? (also called \"Strength\" or \"Sphere\")",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "legal_documents_gem",
    "name": "Gem Name",
    "category": "Legal Documents",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "lender",
    "name": "Lender",
    "category": "Loan",
    "description": "Which bank is the lender?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "length_of_cycle",
    "name": "Length of Cycle",
    "category": "Women's Health History",
    "description": "How many days are in this person's menstrual cycle?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "length_of_tobacco_use",
    "name": "Length of Tobacco Use",
    "category": "Health Information",
    "description": "For how many years did / has this person used tobacco?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "length_time_insured",
    "name": "Length of Time Insured",
    "category": "Vehicle Insurance",
    "description": "How long has this vehicle been insured with the current insurance company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "liability_protection_bodily_injury",
    "name": "Liability Protection - Bodily Injury",
    "category": "Vehicle Insurance",
    "description": "What is the bodily injury liability coverage?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "liability_protection_property_damage",
    "name": "Liability Protection - Property Damage",
    "category": "Vehicle Insurance",
    "description": "What is the property damage liability coverage?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "life_annual_premium",
    "name": "Annual Premium",
    "category": "Life Insurance",
    "description": "How much is paid annually for this life insurance?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "life_coverage_amount",
    "name": "Coverage Amount",
    "category": "Life Insurance",
    "description": "What is the coverage amount of the life insurance?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "life_insurance_company_website",
    "name": "Life Insurance Company Website",
    "category": "Life Insurance",
    "description": "What is the website address for this life insurance provider?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "life_insurance_notes",
    "name": "Life Insurance Notes",
    "category": "Life Insurance",
    "description": "Enter any additional details about this life insurance.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "life_insurance_policy_name",
    "name": "Gem Name",
    "category": "Life Insurance",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "life_insurance_provider",
    "name": "Insurance Provider",
    "category": "Life Insurance",
    "description": "Who is the insurance provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "life_life_insurance_policy_number",
    "name": "Life Insurance Policy Number",
    "category": "Life Insurance",
    "description": "What is the life insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "life_life_insurance_type",
    "name": "Life Insurance Type",
    "category": "Life Insurance",
    "description": "What type of life insurance is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "life_policy_in_effect",
    "name": "Policy in Effect",
    "category": "Life Insurance",
    "description": "When did this life insurance coverage start?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "life_policy_in_effect.day",
    "name": "Policy in Effect Day",
    "category": "Life Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "life_policy_in_effect.month",
    "name": "Policy in Effect Month",
    "category": "Life Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "life_policy_in_effect.year",
    "name": "Policy in Effect Year",
    "category": "Life Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "life_riders",
    "name": "Riders",
    "category": "Life Insurance",
    "description": "What riders does this policy include?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "life_term_length",
    "name": "Life Insurance Term",
    "category": "Life Insurance",
    "description": "How long is the term of the insurance?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "liinkedIn_profile",
    "name": "LinkedIn Profile",
    "category": "Contact Info",
    "description": "What is the URL of the LinkedIn profile?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "living_children",
    "name": "Living Children",
    "category": "Women's Health History",
    "description": "How many living children does/has this person had?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "living_or_deceased",
    "name": "Living or Deceased",
    "category": "Health History",
    "description": "Is this person living or deceased?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "loan_issue_date",
    "name": "Loan Issue Date",
    "category": "Loan",
    "description": "When was the loan issued?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "loan_issue_date.day",
    "name": "Loan Issue Date Day",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loan_issue_date.month",
    "name": "Loan Issue Date Month",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loan_issue_date.year",
    "name": "Loan Issue Date Year",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loan_nickname",
    "name": "Gem Name",
    "category": "Loan",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loan_notes",
    "name": "Loan Notes",
    "category": "Loan",
    "description": "Enter any specific detail about this loan.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loan_payoff_date",
    "name": "Loan Payoff Date",
    "category": "Loan",
    "description": "When is your final loan payment date (payoff date)?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "loan_payoff_date.day",
    "name": "Loan Payoff Date Day",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loan_payoff_date.month",
    "name": "Loan Payoff Date Month",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loan_payoff_date.year",
    "name": "Loan Payoff Date Year",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "loans_account_number",
    "name": "Account Number",
    "category": "Loan",
    "description": "What is the loan account number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loans_interest_rate",
    "name": "Interest Rate",
    "category": "Loan",
    "description": "What is the loan interest rate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loans_monthly_payment",
    "name": "Monthly Payment",
    "category": "Loan",
    "description": "What is the monthly loan payment?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "loans_original_loan_amount",
    "name": "Original Loan Amount",
    "category": "Loan",
    "description": "What was the original loan amount?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "loans_pin_number",
    "name": "PIN Number",
    "category": "Loan",
    "description": "What is the PIN number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loans_reset_rate",
    "name": "Reset Rate",
    "category": "Loan",
    "description": "If the rate resets, what will the new rate be?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "loans_website_address",
    "name": "Website Address",
    "category": "Loan",
    "description": "What is the website address (URL) for this account?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "location",
    "name": "Location",
    "category": "Home",
    "description": "In what setting is your home located?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "location_name",
    "name": "Gem Name",
    "category": "Directions",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "location_plot_receipt",
    "name": "Location of Plot Receipt",
    "category": "Funeral Preferences",
    "description": "Where is the receipt for the plot?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "lock_combination",
    "name": "Lock Combination",
    "category": "Combination Locks",
    "description": "What is the combination for this lock?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "lock_name",
    "name": "Gem Name",
    "category": "Combination Locks",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "lock_notes",
    "name": "Lock Notes",
    "category": "Combination Locks",
    "description": "Enter any additional notes about this lock.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "loose_teeth",
    "name": "Loose Teeth",
    "category": "Dental History",
    "description": "Does the patient have loose teeth?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "lot_number",
    "name": "Lot Number",
    "category": "Home",
    "description": "What is the lot number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "lot_size",
    "name": "Lot Size",
    "category": "Home",
    "description": "How large is the lot in square feet?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "make",
    "name": "Make",
    "category": "Vehicle",
    "description": "What make is your vehicle?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "measles_mumps_rubella_vaccine_date",
    "name": "Measles, Mumps, Rubella  Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the measles, mumps, rubella (MMR) vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "medical_coverage",
    "name": "Medical Coverage",
    "category": "Home Insurance",
    "description": "How much medical coverage do you have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "medication_availability",
    "name": "Availability",
    "category": "Medications",
    "description": "Is this medication available over the counter or by prescription only?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "medication_dosage",
    "name": "Dosage",
    "category": "Medications",
    "description": "What is the dosage of this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_effectiveness",
    "name": "Effectiveness",
    "category": "Medications",
    "description": "Was this medication effective?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_for",
    "name": "Condition",
    "category": "Medications",
    "description": "What does this medication treat?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_frequency",
    "name": "Frequency",
    "category": "Medications",
    "description": "How frequently is this medication taken?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_instructions",
    "name": "Instructions",
    "category": "Medications",
    "description": "Were there special instructions for this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_name",
    "name": "Medication Name",
    "category": "Medications",
    "description": "What is the name of this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_notes",
    "name": "Medication Notes",
    "category": "Medications",
    "description": "Any other notes on this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_over_the_counter_or_prescription",
    "name": "Expiration Date",
    "category": "Medications",
    "description": "When does this prescription expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "medication_prescription_number",
    "name": "Prescription Number",
    "category": "Medications",
    "description": "If prescription only, what is the prescription number for this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_price",
    "name": "Price",
    "category": "Medications",
    "description": "How much did this medication cost?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "medication_record_for",
    "name": "Gem Name",
    "category": "Medications",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_side_effects",
    "name": "Side Effects",
    "category": "Medications",
    "description": "What side effects did this person experience while taking this medication?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "medication_start_date",
    "name": "Start Date",
    "category": "Medications",
    "description": "When was the medication started?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "medication_stop_date",
    "name": "Stop Date",
    "category": "Medications",
    "description": "When was the medication stopped?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "member_id_number",
    "name": "Member ID Number",
    "category": "Health Insurance",
    "description": "What is the member ID number for this policy?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "member_memorial_society",
    "name": "Member of Memorial Society",
    "category": "Funeral Preferences",
    "description": "Are you a member of the Memorial Society?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "member_name",
    "name": "Member Name",
    "category": "Health Insurance",
    "description": "What is the name of the primary member on the policy?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "memorial_service",
    "name": "Memorial Service",
    "category": "Funeral Preferences",
    "description": "What type of memorial service would you like?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "memorial_service_location",
    "name": "Memorial Service Location",
    "category": "Funeral Preferences",
    "description": "Where is the memorial service?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_blazer_style",
    "name": "Blazer Style",
    "category": "Men's Clothing Preferences",
    "description": "What is your blazer style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_brands_you_dont_like",
    "name": "Brands You Dislike",
    "category": "Men's Clothing Preferences",
    "description": "Which brands do you avoid?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_brands_you_love",
    "name": "Brands You Love",
    "category": "Men's Clothing Preferences",
    "description": "What are your favorite brands?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_business_attire_in_your_words",
    "name": "Business Attire, In Your Words",
    "category": "Men's Clothing Preferences",
    "description": "What kind of clothes do you normally wear to work? Do you have a \"uniform\"?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_business_attire_notes",
    "name": "Business Attire Notes",
    "category": "Men's Clothing Preferences",
    "description": "Enter any additional notes about your preferred business attire.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_button_or_zip",
    "name": "Jeans Closure",
    "category": "Men's Clothing Preferences",
    "description": "Do you prefer button or zip fly pants?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_buying_philosophy",
    "name": "Buying Philosophy",
    "category": "Men's Clothing Preferences",
    "description": "Do you have a philosophy when shopping?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_casual_clothes_in_your_words",
    "name": "Casual Clothes, In Your Words",
    "category": "Men's Clothing Preferences",
    "description": "What kind of clothes do you normally wear when you're off the clock?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_casual_clothing_notes",
    "name": "Casual Clothing Notes",
    "category": "Men's Clothing Preferences",
    "description": "Enter any additional notes about the kind of casual clothes you like to wear.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_casual_pants_fit",
    "name": "Casual Pants Fit",
    "category": "Men's Clothing Preferences",
    "description": "What is your preferred pant fit?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_casual_pants_style",
    "name": "Casual Pants Style",
    "category": "Men's Clothing Preferences",
    "description": "What types of casual pants do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_casual_shirt_preferences",
    "name": "Casual Shirt Preferences",
    "category": "Men's Clothing Preferences",
    "description": "What types of casual shirts do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_casual_shirt_style",
    "name": "Casual Shirt Style",
    "category": "Men's Clothing Preferences",
    "description": "What is your casual shirt style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_clothing_qualities",
    "name": "Clothing Qualities",
    "category": "Men's Clothing Preferences",
    "description": "What clothing qualities are most important to you?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_clothing_style",
    "name": "Clothing Style",
    "category": "Men's Clothing Preferences",
    "description": "What components make up your personal style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_clothing_style_in_your_words",
    "name": "Clothing Style, In Your Words",
    "category": "Men's Clothing Preferences",
    "description": "How would you describe your clothing style?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_dress_shirt_style",
    "name": "Dress Shirt Style",
    "category": "Men's Clothing Preferences",
    "description": "What is your dress shirt style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_fabrics",
    "name": "Fabrics",
    "category": "Men's Clothing Preferences",
    "description": "Which fabrics do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_favorite_color_shades_new",
    "name": "Favorite Clothing Colors",
    "category": "Men's Clothing Preferences",
    "description": "What basic colors do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_favorite_department_stores",
    "name": "Favorite Department Stores",
    "category": "Men's Clothing Preferences",
    "description": "What is your favorite department store?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_jeans_wash",
    "name": "Jeans Wash",
    "category": "Men's Clothing Preferences",
    "description": "Which denim washes do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_least_favorite_color_shades_new",
    "name": "Least Favorite Clothing Colors",
    "category": "Men's Clothing Preferences",
    "description": "What basic colors don't you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_necktie_style",
    "name": "Necktie Style",
    "category": "Men's Clothing Preferences",
    "description": "What is your necktie style?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_notes",
    "name": "Men's ClothingPreference Notes",
    "category": "Men's Clothing Preferences",
    "description": "Enter any additional details about your clothing essentials.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_pant_front_style",
    "name": "Pant Front Style",
    "category": "Men's Clothing Preferences",
    "description": "Do you prefer pleats or a flat front on your pants?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_pant_leg_cuff",
    "name": "Pant Leg Cuff",
    "category": "Men's Clothing Preferences",
    "description": "Do you prefer a cuff on your pant leg?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_pant_leg_style",
    "name": "Business Pants Fit",
    "category": "Men's Clothing Preferences",
    "description": "What is your preferred pant fit for the office?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_shorts_style",
    "name": "Shorts Style",
    "category": "Men's Clothing Preferences",
    "description": "What types of shorts do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "men_sports_affiliation",
    "name": "Sports Affiliation",
    "category": "Men's Clothing Preferences",
    "description": "If you like to wear sports-affiliated clothing, which team do root for?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "men_work_dress_code",
    "name": "Work Dress Code",
    "category": "Men's Clothing Preferences",
    "description": "What is your dress code at work?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "meningococcus_vaccine_date",
    "name": "Meningococcus Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the meningococcus vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "menopause",
    "name": "Menopause",
    "category": "Women's Health History",
    "description": "Has this person gone through menopause?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "mens_clothing_preferences_nickname",
    "name": "Gem Name",
    "category": "Men's Clothing Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "middle_name_on_birth_certificate",
    "name": "Middle Name",
    "category": "Birth Certificate",
    "description": "What is the middle name as it appears on the birth certificate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "middle_name_on_drivers_license",
    "name": "Middle Name",
    "category": "Driver's License",
    "description": "What is the middle name as it appears on the driver's license?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "middle_name_on_passport",
    "name": "Middle Name",
    "category": "Passport",
    "description": "What is the middle name as it appears on the passport?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "middle_name_on_social_security_card",
    "name": "Middle Name",
    "category": "Social Security Card",
    "description": "What is the middle name as it appears on the social security card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "model",
    "name": "Model",
    "category": "Vehicle",
    "description": "What model is your vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "monthly_rent",
    "name": "Rent",
    "category": "Rental",
    "description": "What is the rental amount?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "months_at_residence",
    "name": "Months at Residence",
    "category": "Home",
    "description": "How many months have you owned this home?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "motorcycle_basic_nickname",
    "name": "Gem Name",
    "category": "Motorcycle",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_basic_notes",
    "name": "Notes",
    "category": "Motorcycle",
    "description": "Enter any additional notes about your motorcycle.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_color",
    "name": "Color",
    "category": "Motorcycle",
    "description": "What color is your motorcycle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_engine_type_size",
    "name": "Engine Type/Size",
    "category": "Motorcycle",
    "description": "What is the size or type of engine in your motorcycle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_make",
    "name": "Make",
    "category": "Motorcycle",
    "description": "What make is your motorcycle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_model",
    "name": "Model",
    "category": "Motorcycle",
    "description": "What model is your motorcycle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_options",
    "name": "Options",
    "category": "Motorcycle",
    "description": "What options does your motorcycle have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_type",
    "name": "Type",
    "category": "Motorcycle",
    "description": "What type of motorcycle is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "motorcycle_vin",
    "name": "VIN",
    "category": "Motorcycle",
    "description": "What is your motorcycle's VIN?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "motorcycle_year",
    "name": "Motorcycle Year",
    "category": "Motorcycle",
    "description": "What year is your motorcycle?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "mouth_breathing",
    "name": "Mouth Breathing",
    "category": "Dental History",
    "description": "Does the patient mouth breathe while awake or asleep?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "mouth_odors_bad_taste",
    "name": "Mouth Odors/Bad Taste",
    "category": "Dental History",
    "description": "Does the patient have mouth odors/bad taste?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "my_car_basic_nickname",
    "name": "Gem Name",
    "category": "Vehicle",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "my_car_car_notes",
    "name": "Notes",
    "category": "Vehicle",
    "description": "Enter any additional notes about your vehicle.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "my_car_insurance_nickname",
    "name": "Gem Name",
    "category": "Vehicle Insurance",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "my_gem_name",
    "name": "Gem Name",
    "category": "Name",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "my_name_notes",
    "name": "Name Notes",
    "category": "Name",
    "description": "Enter any additional details about how you use your name in different settings.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "name_account",
    "name": "Name on Account",
    "category": "Accounts & Statements",
    "description": "What is the name on the account?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "name_pronunciation_notes",
    "name": "Name Pronunciation Notes",
    "category": "Name",
    "description": "Enter any additional details about the pronunciation of your name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "name_suffix",
    "name": "Suffix",
    "category": "Name",
    "description": "What is your name suffix?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "name_title",
    "name": "Title",
    "category": "Name",
    "description": "What is your title?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "needle_use",
    "name": "Needle Use",
    "category": "Health Information",
    "description": "Has this person ever used needles to inject drugs?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "networking_notes",
    "name": "Networking Notes",
    "category": "Networking",
    "description": "Enter any additional notes about the company network?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "non_alcoholic_drinks",
    "name": "Non-Alcoholic Drinks",
    "category": "Beverage Preferences",
    "description": "What is this person's preferred non-alcoholic beverage?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "note_note",
    "name": "Note",
    "category": "Files Photos & Notes",
    "description": "Enter any information you wish to store as part of this note.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "note_note_url",
    "name": "Note URL",
    "category": "Files Photos & Notes",
    "description": "Provide a reference URL for this note if you would like.",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "note_title",
    "name": "Gem Name",
    "category": "Files Photos & Notes",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "notes_passport",
    "name": "Passport Notes",
    "category": "Passport",
    "description": "Enter any additional notes about this passport.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "number_bathrooms",
    "name": "Number of Bathrooms",
    "category": "Home",
    "description": "How many bathrooms does this home have?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "number_bedrooms",
    "name": "Number of Bedrooms",
    "category": "Home",
    "description": "How many bedrooms does this home have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "number_of_drinks_per_week",
    "name": "Number of Drinks per Week",
    "category": "Health Information",
    "description": "How many drinks does this person consume per week?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "number_of_people_in_the_car",
    "name": "Number of People in the Car",
    "category": "Vehicles Involved in Accident",
    "description": "How many people were in the car at the time of the accident?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "number_of_units",
    "name": "Number of Units",
    "category": "Home",
    "description": "How many units are in this home?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "occasions_name",
    "name": "Gem Name",
    "category": "Occasions",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "occupancy_type",
    "name": "Occupancy Type",
    "category": "Home",
    "description": "What is the primary purpose of this home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "officer_on_the_accident",
    "name": "Officer on the Accident",
    "category": "Vehicle Accident",
    "description": "What was the name of the police officer who arrived on the scene?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "online_contact_notes",
    "name": "Contact Info Notes",
    "category": "Contact Info",
    "description": "Enter any additional details about this person's contact info.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "open_casket",
    "name": "Open Casket",
    "category": "Funeral Preferences",
    "description": "Would you like an open casket service?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "oral_surgery",
    "name": "Oral Surgery",
    "category": "Dental History",
    "description": "Has the patient had oral surgery?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "organ_donar",
    "name": "Organ Donor",
    "category": "Driver's License",
    "description": "Is the person on this license an organ donor?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "orthodontics",
    "name": "Orthodontics",
    "category": "Dental History",
    "description": "Has the patient had orthodontics (braces)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "other_religious_cultural_considerations",
    "name": "Other Religious or Cultural Considerations",
    "category": "Funeral Preferences",
    "description": "Are there other religious or cultural considerations?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_requests",
    "name": "Other Requests",
    "category": "Funeral Preferences",
    "description": "Are there other requests?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_classes_licensed_operate",
    "name": "Other Vehicle Classes",
    "category": "Driver's License",
    "description": "Does this driver's license apply to any other types of vehicles (Class D is a standard driver's license)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "other_vehicle_color",
    "name": "Other Vehicle Color",
    "category": "Vehicles Involved in Accident",
    "description": "What is color is this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_driver",
    "name": "Other Vehicle Driver",
    "category": "Vehicles Involved in Accident",
    "description": "Who was the driver of this vehicle during the accident?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_make",
    "name": "Other Vehicle Make",
    "category": "Vehicles Involved in Accident",
    "description": "What is the make of this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_model",
    "name": "Other Vehicle Model",
    "category": "Vehicles Involved in Accident",
    "description": "What is the model of this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_notes",
    "name": "Other Vehicle Notes",
    "category": "Vehicles Involved in Accident",
    "description": "Enter any additional details about this vehicle's participation in the accident.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_owner",
    "name": "Other Vehicle Owner",
    "category": "Vehicles Involved in Accident",
    "description": "Who owned this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_tag",
    "name": "Other Vehicle Tag",
    "category": "Vehicles Involved in Accident",
    "description": "What is the tag of this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicle_year",
    "name": "Other Vehicle Year",
    "category": "Vehicles Involved in Accident",
    "description": "What is the year of this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_adjuster",
    "name": "Other Vehicle's Adjuster",
    "category": "Vehicles Involved in Accident",
    "description": "What is the name of the adjuster managing the claims process for this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_adjuster_contact",
    "name": "Other Vehicle's Adjuster Contact",
    "category": "Vehicles Involved in Accident",
    "description": "What is the contact information for this adjuster?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_claim_number",
    "name": "Other Vehicle's Claim Number",
    "category": "Vehicles Involved in Accident",
    "description": "What is this vehicle's insurance claim number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_damage",
    "name": "Other Vehicle's Damage",
    "category": "Vehicles Involved in Accident",
    "description": "Describe this car's damage from the accident.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_insurance_company",
    "name": "Other Vehicle's Insurance Company",
    "category": "Vehicles Involved in Accident",
    "description": "What company insures this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_insurance_policy_owner",
    "name": "Other Vehicle's Insurance Policy Owner",
    "category": "Vehicles Involved in Accident",
    "description": "Who is owns the insurance policy on this vehicle?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "other_vehicles_policy_number",
    "name": "Other Vehicle's Policy Number",
    "category": "Vehicles Involved in Accident",
    "description": "What is this vehicle's insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "outdoor_allergies",
    "name": "Outdoor Allergies",
    "category": "Allergies",
    "description": "Is this person allergic to any of the following outdoor allergens?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "outstanding_interest",
    "name": "Outstanding Interest",
    "category": "Loan",
    "description": "What is the outstanding interest amount?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "outstanding_interest_date",
    "name": "Outstanding Interest Date",
    "category": "Loan",
    "description": "What is the outstanding interest as of date?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "outstanding_interest_date.day",
    "name": "Outstanding Interest Date Day",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "outstanding_interest_date.month",
    "name": "Outstanding Interest Date Month",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "outstanding_interest_date.year",
    "name": "Outstanding Interest Date Year",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "outstanding_principal",
    "name": "Outstanding Principal",
    "category": "Loan",
    "description": "What is the current outstanding principal amount?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "outstanding_principal_date",
    "name": "Outstanding Principal Date",
    "category": "Loan",
    "description": "What is the outstanding principal as of date?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "outstanding_principal_date.day",
    "name": "Outstanding Principal Date Day",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "outstanding_principal_date.month",
    "name": "Outstanding Principal Date Month",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "outstanding_principal_date.year",
    "name": "Outstanding Principal Date Year",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "ovaries_removed",
    "name": "Ovaries Removed",
    "category": "Women's Health History",
    "description": "Has this person's ovaries been removed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pant_fit_style",
    "name": "Pant Fit Style",
    "category": "Women's Clothing Preferences",
    "description": "What is your preferred pant fit?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pant_style",
    "name": "Pant Style",
    "category": "Women's Clothing Preferences",
    "description": "What style of pants to you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "parking_availability",
    "name": "Parking Availability",
    "category": "Home",
    "description": "What type of parking is available for this home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "parts_item_brand",
    "name": "Product/Thing Brand",
    "category": "Products & Things",
    "description": "Who is the manufacturer of this product or thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_category",
    "name": "Product/Thing Category",
    "category": "Products & Things",
    "description": "What category of product or thing is this?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_color",
    "name": "Product/Thing Color",
    "category": "Products & Things",
    "description": "What color is this product or thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_description",
    "name": "Description",
    "category": "Products & Things",
    "description": "Enter any descriptive information about the product or thing here.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_identifier",
    "name": "Product/Thing Identifier",
    "category": "Products & Things",
    "description": "What is the SKU, UPC, ASIN, or identifier for this product or thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_model",
    "name": "Product/Thing Model",
    "category": "Products & Things",
    "description": "What is the model for this product/thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_notes",
    "name": "Product/Thing Notes",
    "category": "Products & Things",
    "description": "Enter any additional notes about the product or thing here.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_size",
    "name": "Product/Thing Size",
    "category": "Products & Things",
    "description": "What size is this product or thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_type",
    "name": "Product/Thing Type",
    "category": "Products & Things",
    "description": "What type of product or thing is this?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_item_year",
    "name": "Year Manufactured",
    "category": "Products & Things",
    "description": "What year was this product or thing manufactured?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_name",
    "name": "Gem Name",
    "category": "Products & Things",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "parts_name_part",
    "name": "Name",
    "category": "Products & Things",
    "description": "What is the name for this product or thing?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "passport_expiration_date",
    "name": "Passport Expiration Date",
    "category": "Passport",
    "description": "When does the passport expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "passport_expiration_date.day",
    "name": "Passport Expiration Date Day",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_expiration_date.month",
    "name": "Passport Expiration Date Month",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_expiration_date.year",
    "name": "Passport Expiration Date Year",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_issue_date",
    "name": "Passport Issue Date",
    "category": "Passport",
    "description": "When was the passport issued?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "passport_issue_date.day",
    "name": "Passport Issue Date Day",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_issue_date.month",
    "name": "Passport Issue Date Month",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_issue_date.year",
    "name": "Passport Issue Date Year",
    "category": "Passport",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "passport_nickname",
    "name": "Gem Name",
    "category": "Passport",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "passport_number",
    "name": "Passport Number",
    "category": "Passport",
    "description": "What is the passport number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "password_remember_password",
    "name": "Remember Password",
    "category": "Passwords",
    "description": "Should the site remember your password?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "password_remember_username",
    "name": "Remember Username",
    "category": "Passwords",
    "description": "Should the site remember your username?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "password_stay_logged_in",
    "name": "Stay Logged In",
    "category": "Passwords",
    "description": "Should the site keep you logged in?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "past_infections",
    "name": "Past Infections",
    "category": "Women's Health History",
    "description": "Which infections has this person had in the past?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "payment_frequency",
    "name": "Payment Frequency",
    "category": "Accounts & Statements",
    "description": "At what frequency is this bill payed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "periodontal_disease_treatments",
    "name": "Periodontal Disease Treatments",
    "category": "Dental History",
    "description": "Has the patient had treatment for periodontal (gum) disease?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_employment_status",
    "name": "Employment Status",
    "category": "Personal Information",
    "description": "What is this person's current work status?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_hair_color",
    "name": "Hair Color",
    "category": "Personal Information",
    "description": "What is this person's hair color?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_highest_degree_received",
    "name": "Highest Degree Received",
    "category": "Personal Information",
    "description": "What is the highest education level completed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_identifying_information",
    "name": "Identifying Information",
    "category": "Personal Information",
    "description": "Describe any other identifying information about this person (birthmarks, scars, physical attributes).",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_marital_status",
    "name": "Marital Status",
    "category": "Personal Information",
    "description": "What is this person's marital status?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_mothers_maiden_name",
    "name": "Mother's Maiden Name",
    "category": "Personal Information",
    "description": "What is this person's mother's maiden name?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_name",
    "name": "Gem Name",
    "category": "Personal Information",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_notes",
    "name": "Personal Information Notes",
    "category": "Personal Information",
    "description": "Enter any additional notes about this person.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_other_language_spoken",
    "name": "Other Languages Spoken",
    "category": "Personal Information",
    "description": "What other languages does this person speak?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_primary_language_spoken",
    "name": "Primary Language Spoken",
    "category": "Personal Information",
    "description": "What is the primary language that this person speaks?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_details_race_ethnicity",
    "name": "Race/Ethnicity",
    "category": "Personal Information",
    "description": "What is this person's race/ethnicity?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_relationship",
    "name": "Relationship",
    "category": "Personal Information",
    "description": "What is your relationship to this person?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_religion",
    "name": "Religion",
    "category": "Personal Information",
    "description": "What religion do you identify with?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_residency",
    "name": "Residency",
    "category": "Personal Information",
    "description": "What is this person's residency status?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_details_sex",
    "name": "Gender",
    "category": "Personal Information",
    "description": "What is this person's gender?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_email",
    "name": "Email",
    "category": "Contact Info",
    "description": "What is this person's personal email?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_injury_protection_funeral",
    "name": "Personal Injury Protection - Funeral",
    "category": "Vehicle Insurance",
    "description": "What is the personal injury coverage for funeral claims?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "personal_injury_protection_medical",
    "name": "Personal Injury Protection - Medical",
    "category": "Vehicle Insurance",
    "description": "What is the personal injury coverage for medical claims?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "personal_injury_protection_work_loss",
    "name": "Personal Injury Protection - Work Loss",
    "category": "Vehicle Insurance",
    "description": "What is the personal injury coverage for work loss claims?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "personal_liability_coverage",
    "name": "Personal Liability Coverage",
    "category": "Home Insurance",
    "description": "How much personal liability coverage do you have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "personal_occasion_date",
    "name": "Occasion Date",
    "category": "Occasions",
    "description": "What is the date of this occasion?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "personal_occasion_name",
    "name": "Occasion Name",
    "category": "Occasions",
    "description": "What is the name of this occasion?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_other_email",
    "name": "Other Email",
    "category": "Contact Info",
    "description": "What is this person's other email?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_profile_notes",
    "name": "Personal Profile Notes",
    "category": "Personal Profile",
    "description": "Enter any additional notes about this personal profile.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_property_coverage",
    "name": "Personal Property Coverage",
    "category": "Home Insurance",
    "description": "How much personal property coverage do you have?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "personal_secondary_email",
    "name": "Work Email",
    "category": "Contact Info",
    "description": "What is this person's work email?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "personal_website",
    "name": "Website",
    "category": "Contact Info",
    "description": "What is the URL for the website?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "pet_aggression",
    "name": "Pet Aggression",
    "category": "Pet",
    "description": "Under what conditions does this pet growl, snarl, bark or cry?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_allergies",
    "name": "Pet Allergies",
    "category": "Allergies",
    "description": "Is this person allergic to any pets?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_breed",
    "name": "Pet Breed",
    "category": "Pet",
    "description": "What is the breed of this pet?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_color",
    "name": "Pet Color",
    "category": "Pet",
    "description": "What color is the pet?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_date_of_birth",
    "name": "Pet Date of Birth",
    "category": "Pet",
    "description": "When was this pet born?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "pet_date_of_birth.day",
    "name": "Pet Date of Birth Day",
    "category": "Pet",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "pet_date_of_birth.month",
    "name": "Pet Date of Birth Month",
    "category": "Pet",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "pet_date_of_birth.year",
    "name": "Pet Date of Birth Year",
    "category": "Pet",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "pet_gem_name",
    "name": "Gem Name",
    "category": "Pet",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_health_name",
    "name": "Gem Name",
    "category": "Pet Health",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_health_notes",
    "name": "Pet Notes",
    "category": "Pet Health",
    "description": "Enter any additional notes about this pet.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_health_pet_allergies",
    "name": "Pet Allergies",
    "category": "Pet Health",
    "description": "Does this pet have any allergies?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_health_problems",
    "name": "Pet Health Problems",
    "category": "Pet Health",
    "description": "List any pet health problems.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_indoor_outdoor",
    "name": "Indoor/Outdoor Pet",
    "category": "Pet",
    "description": "Is this an indoor or outdoor pet?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_microchip",
    "name": "Pet Microchip",
    "category": "Pet",
    "description": "Does your pet have a microchip?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_microchip_company",
    "name": "Microchip Company",
    "category": "Pet",
    "description": "What is the name of the microchip company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_microchip_number",
    "name": "Microchip Number",
    "category": "Pet",
    "description": "What is the microchip number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_name",
    "name": "Pet Name",
    "category": "Pet",
    "description": "What is the name of this pet?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_notes",
    "name": "Pet Notes",
    "category": "Pet",
    "description": "Enter any additional notes that you want others to know about this pet.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_personality",
    "name": "Pet Personality",
    "category": "Pet",
    "description": "What's the pet's personality? Are they social with new people? Or, is your pet sometimes a grouch?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_pet_gender",
    "name": "Pet Gender",
    "category": "Pet",
    "description": "What is the pet's sex?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_sleeping_pref",
    "name": "Pet Sleeping Preferences",
    "category": "Pet",
    "description": "Describe the sleeping habits of the pet (cage, bed, etc.)",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_spayed_neutered",
    "name": "Pet Spayed/Neutered",
    "category": "Pet",
    "description": "Has this pet been spayed or neutered?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_temperment",
    "name": "Pet Temperment",
    "category": "Pet",
    "description": "What is the pet's temperment?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_toy_pref",
    "name": "Pet Toy Preferences",
    "category": "Pet",
    "description": "What toys does this pet like?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_type",
    "name": "Pet Type",
    "category": "Pet",
    "description": "What type of pet is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pet_vaccinations_name",
    "name": "Gem Name",
    "category": "Pet Vaccinations",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "pet_weight",
    "name": "Pet Weight",
    "category": "Pet",
    "description": "How much does this pet weigh?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "phone_name",
    "name": "Gem Name",
    "category": "Phone",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number",
    "name": "Phone Number",
    "category": "Phone",
    "description": "What is the phone number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.area_code",
    "name": "Phone Number Area Code",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.country_code",
    "name": "Phone Number Country Code",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.extension",
    "name": "Phone Number Extension",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.first_three",
    "name": "Phone Number First Three in Local Number",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.last_four",
    "name": "Phone Number Last Four in Local Number",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number.number",
    "name": "Phone Number Local Number",
    "category": "Phone",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "phone_number_notes",
    "name": "Phone Number Notes",
    "category": "Phone",
    "description": "Enter any additional notes about this phone number.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "photos_taken",
    "name": "Photos Taken",
    "category": "Vehicle Accident",
    "description": "Were there photos taken at the scene of the accident?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "physical_damage_coverage_collision",
    "name": "Physical Damage Coverage - Collision",
    "category": "Vehicle Insurance",
    "description": "What is the physical damage coverage for collision?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "physical_damage_coverage_comprehensive",
    "name": "Physical Damage Coverage - Comprehensive",
    "category": "Vehicle Insurance",
    "description": "What is the physical damage coverage for comprehensive (theft, vandalism, etc.)?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "place_detail_email",
    "name": "Place Email",
    "category": "Place",
    "description": "What is the email address?",
    "privatePData": null,
    "semanticType": "email",
    "uri": null
  },
  {
    "id": "place_detail_place_category",
    "name": "Place Category",
    "category": "Place",
    "description": "Pick a category for this place.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "place_detail_place_name",
    "name": "Place Name",
    "category": "Place",
    "description": "Name this place.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "place_detail_place_notes",
    "name": "Place Notes",
    "category": "Place",
    "description": "Enter any additional notes about this place.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "place_detail_website",
    "name": "Website",
    "category": "Place",
    "description": "What is the URL for this establishment's website?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "plot_location",
    "name": "Plot Location",
    "category": "Funeral Preferences",
    "description": "Where is the plot?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "plot_prepaid",
    "name": "Plot Prepaid",
    "category": "Funeral Preferences",
    "description": "Is the plot prepaid?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pms",
    "name": "PMS",
    "category": "Women's Health History",
    "description": "Does this person have concerns about PMS?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pneumococcal_pneumonia_vaccine",
    "name": "Pneumococcal / Pneumonia Vaccine",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the pneumococcal / pneumonia vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "police_department",
    "name": "Police Department",
    "category": "Vehicle Accident",
    "description": "What police district was this police officer from?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number",
    "name": "Police District Phone Number",
    "category": "Alarm System",
    "description": "What is the phone number for the police district?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.area_code",
    "name": "Police District Phone Number Area Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.country_code",
    "name": "Police District Phone Number Country Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.extension",
    "name": "Police District Phone Number Extension",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.first_three",
    "name": "Police District Phone Number First Three in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.last_four",
    "name": "Police District Phone Number Last Four in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "police_district_phone_number.number",
    "name": "Police District Phone Number Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "policy_expiration",
    "name": "Policy Expiration",
    "category": "Home Insurance",
    "description": "When does the current insurance policy expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "policy_expiration.day",
    "name": "Policy Expiration Day",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_expiration.month",
    "name": "Policy Expiration Month",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_expiration.year",
    "name": "Policy Expiration Year",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_in_effect",
    "name": "Policy in Effect",
    "category": "Home Insurance",
    "description": "When did the homeowners coverage start?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "policy_in_effect.day",
    "name": "Policy in Effect Day",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_in_effect.month",
    "name": "Policy in Effect Month",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_in_effect.year",
    "name": "Policy in Effect Year",
    "category": "Home Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "policy_notes",
    "name": "Policy Notes",
    "category": "Vehicle Insurance",
    "description": "Enter any additional notes about this policy.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "policy_number",
    "name": "Policy Number",
    "category": "Home Insurance",
    "description": "What is the homeowners insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "polio_vaccine_date",
    "name": "Polio Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the polio vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "prearranged_funeral_plan",
    "name": "Prearranged Funeral Plan",
    "category": "Funeral Preferences",
    "description": "Do you have a prearranged funeral plan?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "preferred_first_name",
    "name": "First Name",
    "category": "Name",
    "description": "What first name do you prefer to go by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_first_name_pronunciation",
    "name": "First Name Pronunciation",
    "category": "Name",
    "description": "Explain to others how to pronounce your first name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_last_name",
    "name": "Last Name",
    "category": "Name",
    "description": "What last name do you prefer to go by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_last_name_pronunciation",
    "name": "Last Name Pronunciation",
    "category": "Name",
    "description": "Explain to others how to pronounce your last name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_maiden_name",
    "name": "Maiden Name",
    "category": "Name",
    "description": "What is your maiden name?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_middle_name",
    "name": "Middle Name",
    "category": "Name",
    "description": "What middle name do you prefer to go by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "preferred_nickname",
    "name": "Nickname",
    "category": "Name",
    "description": "What nickname do you go by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "prepaid_funeral_plan",
    "name": "Prepaid Funeral Plan",
    "category": "Funeral Preferences",
    "description": "Is the funeral plan prepaid?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_category",
    "name": "Address Category",
    "category": "Address",
    "description": "Pick a category for this address.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_city",
    "name": "City",
    "category": "Address",
    "description": "What is the city?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_company",
    "name": "Name of Business",
    "category": "Address",
    "description": "If this is a business address, what is the company name?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "previous_address_country",
    "name": "Country",
    "category": "Address",
    "description": "What is the country?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_county",
    "name": "County",
    "category": "Address",
    "description": "What is the county?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "previous_address_move_in_date",
    "name": "Move In Date",
    "category": "Address",
    "description": "What is the move in date?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "previous_address_move_in_date.day",
    "name": "Move In Date Day",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_move_in_date.month",
    "name": "Move In Date Month",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_move_in_date.year",
    "name": "Move In Date Year",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_move_out_date",
    "name": "Move Out Date",
    "category": "Address",
    "description": "What is the move out date?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "previous_address_move_out_date.day",
    "name": "Move Out Date Day",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_move_out_date.month",
    "name": "Move Out Date Month",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_move_out_date.year",
    "name": "Move Out Date Year",
    "category": "Address",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_address_nick",
    "name": "Gem Name",
    "category": "Address",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "previous_address_notes",
    "name": "Address Notes",
    "category": "Address",
    "description": "Enter any additional information about this address.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "previous_address_provinces",
    "name": "Province",
    "category": "Address",
    "description": "What is the province?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_state",
    "name": "State",
    "category": "Address",
    "description": "What is the state?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_street",
    "name": "Street Address 1",
    "category": "Address",
    "description": "What is the street address?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_street_2",
    "name": "Street Address 2",
    "category": "Address",
    "description": "What is the street address (second line)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_address_zip_code",
    "name": "Postal Code",
    "category": "Address",
    "description": "What is the postal code?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "previous_miscarriages",
    "name": "Previous Miscarriages",
    "category": "Women's Health History",
    "description": "How many previous miscarriages has this person had?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "previous_terminations_of_pregnancies",
    "name": "Previous Terminations of Pregnancies",
    "category": "Women's Health History",
    "description": "How many previous pregnancies were terminated?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "prior_dental_complications",
    "name": "Prior Dental Complications",
    "category": "Dental History",
    "description": "Has the patient had any issues or complications with previous dental treatments?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "property_nickname",
    "name": "Gem Name",
    "category": "Home",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "property_type",
    "name": "Property Type",
    "category": "Home",
    "description": "What kind of home is this?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "property_type_attached",
    "name": "Property Style",
    "category": "Home",
    "description": "Is this property attached to another home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "protective_sports_equipment",
    "name": "Protective Sports Equipment",
    "category": "Health Information",
    "description": "Does this person always wear protective sports gear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "pupillary_distance_pd",
    "name": "Pupillary Distance (PD)",
    "category": "Vision",
    "description": "What is the pupillary distance measurement?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "quality_of_credit",
    "name": "Quality of Credit",
    "category": "Credit Report",
    "description": "Overall, how would you rate your credit history?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "redress_number",
    "name": "Redress Number",
    "category": "Trusted Traveler",
    "description": "What is this traveler's Redress Number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "religious_ceremony",
    "name": "Religious Ceremony",
    "category": "Funeral Preferences",
    "description": "Where is the religious ceremony?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "renatl_responsibilities",
    "name": "Responsibilities",
    "category": "Rental",
    "description": "Do the renters have any specific responsibilities?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rent_includes",
    "name": "Rent Includes",
    "category": "Rental",
    "description": "What is included as a part of this rental?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rent_own",
    "name": "Rent or Own",
    "category": "Home",
    "description": "Do you rent or own this home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "rent_payment_due",
    "name": "Rent Payment Due",
    "category": "Rental",
    "description": "When is the rent due each month?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rental_car_expense_coverage",
    "name": "Rental Car Expense Coverage",
    "category": "Vehicle Insurance",
    "description": "Does this policy have rental car expense coverage when the car is in the shop?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "rental_contract_number",
    "name": "Contract Number",
    "category": "Rental",
    "description": "What is the rental contract number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rental_end_date",
    "name": "End Date",
    "category": "Rental",
    "description": "When does the rental period end?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "rental_end_date.day",
    "name": "End Date Day",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "rental_end_date.month",
    "name": "End Date Month",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "rental_end_date.year",
    "name": "End Date Year",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "rental_notes",
    "name": "Rental Notes",
    "category": "Rental",
    "description": "Enter any additional notes about this rental.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rental_payment_frequency",
    "name": "Payment Frequency",
    "category": "Rental",
    "description": "What is the payment frequency for this rental?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "rental_rental_provider",
    "name": "Rental Provider",
    "category": "Rental",
    "description": "Who are you renting this item from?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rental_rental_type",
    "name": "Rental Type",
    "category": "Rental",
    "description": "What are you renting?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "rental_riders",
    "name": "Riders",
    "category": "Vehicle Insurance",
    "description": "What, if any, riders does this policy include?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "rental_start_date",
    "name": "Start Date",
    "category": "Rental",
    "description": "When does the rental period begin?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "rental_start_date.day",
    "name": "Start Date Day",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "rental_start_date.month",
    "name": "Start Date Month",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "rental_start_date.year",
    "name": "Start Date Year",
    "category": "Rental",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_deductible",
    "name": "Deductible",
    "category": "Renter's Insurance",
    "description": "What is the deductible?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_insurance_company_website",
    "name": "Renter's Insurance Company Website",
    "category": "Renter's Insurance",
    "description": "What is the website address for your renter's insurance provider?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "renters_insurance_policy_name",
    "name": "Gem Name",
    "category": "Renter's Insurance",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "renters_insurance_provider",
    "name": "Renter's Insurance Provider",
    "category": "Renter's Insurance",
    "description": "Who is the renter's insurance provider?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "renters_medical_coverage",
    "name": "Medical Coverage",
    "category": "Renter's Insurance",
    "description": "How much medical coverage does this policy include?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_notes",
    "name": "Renter's Insurance Notes",
    "category": "Renter's Insurance",
    "description": "Enter any additional notes about this renter's insurance.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "renters_personal_liability_coverage",
    "name": "Personal Liability Coverage",
    "category": "Renter's Insurance",
    "description": "How much personal liability coverage does this policy include?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_personal_property_coverage",
    "name": "Personal Property Coverage",
    "category": "Renter's Insurance",
    "description": "How much personal property coverage does this policy include?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_expiration",
    "name": "Policy Expiration",
    "category": "Renter's Insurance",
    "description": "When does the renter's insurance policy expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "renters_policy_expiration.day",
    "name": "Policy Expiration Day",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_expiration.month",
    "name": "Policy Expiration Month",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_expiration.year",
    "name": "Policy Expiration Year",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_in_effect",
    "name": "Policy in Effect",
    "category": "Renter's Insurance",
    "description": "When did the renter's insurance policy start?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "renters_policy_in_effect.day",
    "name": "Policy in Effect Day",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_in_effect.month",
    "name": "Policy in Effect Month",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_in_effect.year",
    "name": "Policy in Effect Year",
    "category": "Renter's Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "renters_policy_number",
    "name": "Policy Number",
    "category": "Renter's Insurance",
    "description": "What is the renter's insurance policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "renters_property_value",
    "name": "Property Value",
    "category": "Renter's Insurance",
    "description": "By your estimate, what is approximately the total value of the insured personal property?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "repayment_begin_date",
    "name": "Repayment Begin Date",
    "category": "Loan",
    "description": "When does the loan repayment period begin?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "repayment_begin_date.day",
    "name": "Repayment Begin Date Day",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "repayment_begin_date.month",
    "name": "Repayment Begin Date Month",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "repayment_begin_date.year",
    "name": "Repayment Begin Date Year",
    "category": "Loan",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "retirement_preferences_business_creation",
    "name": "Business Creation",
    "category": "Retirement Preferences",
    "description": "How important is it to you to start your own business?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_community_involvement",
    "name": "Community Involvement",
    "category": "Retirement Preferences",
    "description": "How important is it to you to become involved in the community?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_continuing_education",
    "name": "Continuing Education",
    "category": "Retirement Preferences",
    "description": "How important is it to you to take classes?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_downsizing",
    "name": "Downsizing",
    "category": "Retirement Preferences",
    "description": "How important is it to you to relocate to a smaller place?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_family_relocation",
    "name": "Family Relocation",
    "category": "Retirement Preferences",
    "description": "How important is it to you to move closer to family?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_family_visits",
    "name": "Family Visits",
    "category": "Retirement Preferences",
    "description": "How important is it to you to be able to see your grandchildren and children?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_financial_independence",
    "name": "Financial Independence",
    "category": "Retirement Preferences",
    "description": "How important is it to you to remain as financially independent as possible?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_health_wellness",
    "name": "Health & Wellness",
    "category": "Retirement Preferences",
    "description": "How important is it to you to remain healthy and active?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_hobby",
    "name": "Hobby",
    "category": "Retirement Preferences",
    "description": "How important is it to you to focus on a hobby?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_home_purchasing",
    "name": "Home Purchasing",
    "category": "Retirement Preferences",
    "description": "How important is it to you to buy a second home?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_independence",
    "name": "Independence",
    "category": "Retirement Preferences",
    "description": "How important is it to you to remain as independent as possible for as long as possible?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_name",
    "name": "Gem Name",
    "category": "Retirement Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "retirement_preferences_notes",
    "name": "Retirement Preference Notes",
    "category": "Retirement Preferences",
    "description": "Enter any additional information about your hopes for retirement.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "retirement_preferences_residence",
    "name": "Residence",
    "category": "Retirement Preferences",
    "description": "How important is it to you to remain in your own home for as long as possible?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_retirement_relocation",
    "name": "Retirement Relocation",
    "category": "Retirement Preferences",
    "description": "How important is it to you to retire in a different location?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_safety_net",
    "name": "Safety Net",
    "category": "Retirement Preferences",
    "description": "How important is it to you to create a safety net in the event of an emergency or crisis situation?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_travel",
    "name": "Travel",
    "category": "Retirement Preferences",
    "description": "How important is it to you to travel?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "retirement_preferences_work",
    "name": "Work",
    "category": "Retirement Preferences",
    "description": "How important is it to you to remain healthy and active?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "revenue_income_gem_name",
    "name": "Gem Name",
    "category": "Revenue & Income",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "review_name",
    "name": "Gem Name",
    "category": "Review",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "review_rating",
    "name": "Rating",
    "category": "Review",
    "description": "Select your rating.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "review_review",
    "name": "Review",
    "category": "Review",
    "description": "Enter your review here.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "riders",
    "name": "Riders",
    "category": "Health Insurance",
    "description": "What riders, if any, are there on this policy?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "right_eye",
    "name": "Right Eye",
    "category": "Vision",
    "description": "What is the glasses prescription for the right eye?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "right_eye_access",
    "name": "Right Eye Axis",
    "category": "Vision",
    "description": "What is the right eye axis measurement?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "right_eye_bc",
    "name": "Right Eye BC",
    "category": "Vision",
    "description": "What is the BC for the right eye? (BC is Base Curve and is usually an 8.x or 9.x number)",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "right_eye_cylinder",
    "name": "Right Eye Cylinder",
    "category": "Vision",
    "description": "What is the measurement for the right eye cylinder?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "right_eye_dia",
    "name": "Right Eye DIA",
    "category": "Vision",
    "description": "What is the DIA for the right eye? (diameter usually falls between 13.x and 15.x)",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "right_eye_power",
    "name": "Right Eye Power",
    "category": "Vision",
    "description": "What is the power for the right eye? (also called \"Strength\" or \"Sphere\")",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "road_service_coverage",
    "name": "Road Service Coverage",
    "category": "Vehicle Insurance",
    "description": "Does this policy include road service coverage?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "rotavirus_vaccine_date",
    "name": "Rotavirus Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the rotavirus vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "routine_childs_nickname",
    "name": "Gem Name",
    "category": "Routine",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "routine_days",
    "name": "Routine Days",
    "category": "Routine",
    "description": "What days of the week does this routine take place?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "routine_description",
    "name": "Routine Description",
    "category": "Routine",
    "description": "Enter any additional information to describe this routine.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "saving_assets",
    "name": "Saving Assets",
    "category": "Tax & Income",
    "description": "What was the total amount from savings assets?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "scholarship_amount_awarded",
    "name": "Amount Awarded",
    "category": "Scholarship",
    "description": "What is the total amount awarded from this scholarship?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "scholarship_area_of_study_requirement",
    "name": "Area of Study Requirement",
    "category": "Scholarship",
    "description": "What are the area of study requirements?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_award_year",
    "name": "Award Year",
    "category": "Scholarship",
    "description": "For what academic year was this scholarship awarded?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_college_location_requirement",
    "name": "College Location Requirement",
    "category": "Scholarship",
    "description": "What are the college location requirements?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_eligibility_notes",
    "name": "Eligibility Notes",
    "category": "Scholarship",
    "description": "Enter any additional notes about the eligibility requirements.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_ethnicity_heritage_requirement",
    "name": "Ethnicity/Heritage Requirement",
    "category": "Scholarship",
    "description": "What are the ethnicity/heritage requirements for this scholarship?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_fall_distribution_amount",
    "name": "Fall Distribution Amount",
    "category": "Scholarship",
    "description": "What is the distribution amount for the fall semester?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "scholarship_fall_distribution_date",
    "name": "Fall Distribution Date",
    "category": "Scholarship",
    "description": "What is the distribution date for the fall semester?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "scholarship_financial_requirement",
    "name": "Financial Requirement",
    "category": "Scholarship",
    "description": "What are the financial requirements?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_gem_name",
    "name": "Gem Name",
    "category": "Scholarship",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_gender_requirement",
    "name": "Gender Requirement",
    "category": "Scholarship",
    "description": "What are the gender requirements?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_minimum_gpa_requirement",
    "name": "Minimum GPA Requirement",
    "category": "Scholarship",
    "description": "What are the minimum GPA requirements for this scholarship?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_name",
    "name": "Scholarship Name",
    "category": "Scholarship",
    "description": "What is the name of this scholarship?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_notes",
    "name": "Scholarship Notes",
    "category": "Scholarship",
    "description": "Enter any additional notes about this scholarship.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_organization",
    "name": "Organization",
    "category": "Scholarship",
    "description": "What is the name of the organization funding this scholarship?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_residency_requirement",
    "name": "Residency Requirement",
    "category": "Scholarship",
    "description": "What are the residency requirements for this scholarship?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "scholarship_spring_distribution_amount",
    "name": "Spring Distribution Amount",
    "category": "Scholarship",
    "description": "What is the distribution amount for the spring semester?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "scholarship_spring_distribution_date",
    "name": "Spring Distribution Date",
    "category": "Scholarship",
    "description": "What is the distribution date for the spring semester?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "scholarship_summer_distribution_amount",
    "name": "Summer Distribution Amount",
    "category": "Scholarship",
    "description": "What is the distribution amount for the summer semester?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "scholarship_summer_distribution_date",
    "name": "Summer Distribution Date",
    "category": "Scholarship",
    "description": "What is the distribution date for the summer semester?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "schoole_name",
    "name": "School Name",
    "category": "Education",
    "description": "What is the name of the school you attended?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "seatbelt_use",
    "name": "Seatbelt Use",
    "category": "Health Information",
    "description": "Does this person regularly wear a seatbelt?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "secure_note_note",
    "name": "Note",
    "category": "Encrypted Notes & Files",
    "description": "Enter any information you wish to store as part of this note.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "secure_note_title",
    "name": "Gem Name",
    "category": "Encrypted Notes & Files",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_code",
    "name": "CVV Code",
    "category": "Credit & Debit Card",
    "description": "What is the credit card's CVV (security) code?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_deposit",
    "name": "Security Deposit",
    "category": "Rental",
    "description": "How much is the security deposit?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number",
    "name": "Security Dispatch Phone Number",
    "category": "Alarm System",
    "description": "What is the phone number for the security dispatch?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.area_code",
    "name": "Security Dispatch Phone Number Area Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.country_code",
    "name": "Security Dispatch Phone Number Country Code",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.extension",
    "name": "Security Dispatch Phone Number Extension",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.first_three",
    "name": "Security Dispatch Phone Number First Three in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.last_four",
    "name": "Security Dispatch Phone Number Last Four in Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_dispatc_phone_number.number",
    "name": "Security Dispatch Phone Number Local Number",
    "category": "Alarm System",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_question",
    "name": "Secret Question",
    "category": "Password Security Question",
    "description": "What is the security question?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_question_answer",
    "name": "Secret Answer",
    "category": "Password Security Question",
    "description": "What is the answer for this security question?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_question_name",
    "name": "Gem Name",
    "category": "Password Security Question",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_question_notes",
    "name": "Security Question Notes",
    "category": "Password Security Question",
    "description": "Enter any additional details about the security.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "security_system",
    "name": "Security System",
    "category": "Home",
    "description": "Does this home have a security system?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "server_access_instructions",
    "name": "Server Access Instructions",
    "category": "Networking",
    "description": "Enter any special instructions about accessing this server.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "server_address",
    "name": "Server Address",
    "category": "Networking",
    "description": "What is the companies server address?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "server_purpose",
    "name": "Server Purpose",
    "category": "Networking",
    "description": "What is this used for?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "service_open_all",
    "name": "Service Open to All",
    "category": "Funeral Preferences",
    "description": "Is the service open to all?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "sexual_activity",
    "name": "Sexual Activity",
    "category": "Health Information",
    "description": "Is this person currently sexually active?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "sexual_partners",
    "name": "Sexual Partners",
    "category": "Health Information",
    "description": "Sexual partners is/have been:",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "shingles_vaccine_date",
    "name": "Shingles Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the shingles vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "shoe_pref_shoe_size",
    "name": "Shoe Size",
    "category": "Shoe Size",
    "description": "What size shoe do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "shoe_pref_shoe_width",
    "name": "Shoe Width",
    "category": "Shoe Size",
    "description": "What width of shoe do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "shoe_preference_category",
    "name": "Shoe Size Category",
    "category": "Shoe Size",
    "description": "Who are these shoe sizes for?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "shoe_preference_name",
    "name": "Gem Name",
    "category": "Shoe Size",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "shoe_preference_notes",
    "name": "Shoe Size Notes",
    "category": "Shoe Size",
    "description": "Enter any additional details about your shoe size.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "short_bio",
    "name": "Short Bio",
    "category": "Bio",
    "description": "Tell us about yourself. Be concise. (500 Character Limit)",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "short_company_description",
    "name": "Short Company Description",
    "category": "Bio",
    "description": "Tell us about your company. Be concise. (850 Character Limit)",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "shorts_style",
    "name": "Shorts Style",
    "category": "Women's Clothing Preferences",
    "description": "What style of shorts do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_clothing_size_notes",
    "name": "Women's Clothing Size Notes",
    "category": "Women's Clothing Size",
    "description": "Enter any additional details about your clothing sizes.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "size_coat_length",
    "name": "Coat Length",
    "category": "Men's Clothing Size",
    "description": "What is your coat length?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_coat_size",
    "name": "Coat Size",
    "category": "Women's Clothing Size",
    "description": "What is your coat size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_coat_size_chest",
    "name": "Coat Size (Chest)",
    "category": "Men's Clothing Size",
    "description": "What is your coat size (chest)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_dress_size",
    "name": "Dress Size",
    "category": "Women's Clothing Size",
    "description": "What size dress do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_floorplan",
    "name": "Size of Floor plan",
    "category": "Home",
    "description": "How many square feet does this home have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "size_girls_clothing_nickname",
    "name": "Gem Name",
    "category": "Kid's Clothing Size",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "size_girls_coat_size",
    "name": "Coat Size",
    "category": "Kid's Clothing Size",
    "description": "What is your child's coat size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_girls_dress_size",
    "name": "Dress Size",
    "category": "Kid's Clothing Size",
    "description": "What is your child's dress size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_girls_girls_clothing_size_notes",
    "name": "Kid's Clothing Size Notes",
    "category": "Kid's Clothing Size",
    "description": "Enter any additional notes about your kid's clothing sizes.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "size_girls_pants_size",
    "name": "Pants Size",
    "category": "Kid's Clothing Size",
    "description": "What is your child's pant size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_girls_shirt_size",
    "name": "Shirt Size",
    "category": "Kid's Clothing Size",
    "description": "What is your child's shirt size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_girls_sweater_size",
    "name": "Sweater Size",
    "category": "Kid's Clothing Size",
    "description": "What is your child's sweater size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_jean_size",
    "name": "Jean Size",
    "category": "Women's Clothing Size",
    "description": "What size jeans do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_kids_clothing_preference_category",
    "name": "Kid's Clothing Size Category",
    "category": "Kid's Clothing Size",
    "description": "Who is this size record for?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_arm_length",
    "name": "Arm Length",
    "category": "Men's Clothing Size",
    "description": "What is your shirt arm length?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_glove_size",
    "name": "Glove Size",
    "category": "Men's Clothing Size",
    "description": "What size gloves do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_neck_size",
    "name": "Neck Size",
    "category": "Men's Clothing Size",
    "description": "What is your shirt neck size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_notes",
    "name": "Clothing Size Notes",
    "category": "Men's Clothing Size",
    "description": "Enter any additional details about your clothing sizes.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "size_men_pant_inseam_length",
    "name": "Pant Inseam Length",
    "category": "Men's Clothing Size",
    "description": "What is your pant inseam length?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_shirt_size",
    "name": "Shirt Size",
    "category": "Men's Clothing Size",
    "description": "What is your shirt size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_men_waist_size",
    "name": "Waist Size",
    "category": "Men's Clothing Size",
    "description": "What is your waist size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_mens_clothing_preferences_nickname",
    "name": "Gem Name",
    "category": "Men's Clothing Size",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "size_pants_size",
    "name": "Pants Size",
    "category": "Women's Clothing Size",
    "description": "What size pants do you wear?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_shirt_size",
    "name": "Shirt Size",
    "category": "Women's Clothing Size",
    "description": "What is your shirt size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_skirt_size",
    "name": "Skirt Size",
    "category": "Women's Clothing Size",
    "description": "What is your skirt size?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "size_womens_clothing_nickname",
    "name": "Gem Name",
    "category": "Women's Clothing Size",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "skirt_length",
    "name": "Skirt Length",
    "category": "Women's Clothing Preferences",
    "description": "What length of skirts do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "skirt_style",
    "name": "Skirt Style",
    "category": "Women's Clothing Preferences",
    "description": "What style skirts do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "social_notes",
    "name": "Social Security Card Notes",
    "category": "Social Security Card",
    "description": "Enter any additional notes about the social security card.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "social_security_card_nickname",
    "name": "Gem Name",
    "category": "Social Security Card",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "social_security_number",
    "name": "Social Security Number",
    "category": "Social Security Card",
    "description": "What is the social security number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "social_security_number.first_three",
    "name": "Social Security Number First Three",
    "category": "Social Security Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "social_security_number.last_four",
    "name": "Social Security Number Last Four",
    "category": "Social Security Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "social_security_number.middle_two",
    "name": "Social Security Number Middle Two",
    "category": "Social Security Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "some_adjectives_about_child",
    "name": "Some Adjectives About This Person",
    "category": "Personality",
    "description": "What are some good adjectives to describe this person?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "source_of_funds",
    "name": "Source of Funds",
    "category": "Investment Account",
    "description": "What account is the money transferred from?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "sprinkler_system",
    "name": "Sprinkler System",
    "category": "Home",
    "description": "Does this home have a sprinkler system?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "state_issued_drivers_license",
    "name": "Driver's License State",
    "category": "Driver's License",
    "description": "What state issued the driver's license?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "statement_detail_notes",
    "name": "Statement Detail Notes",
    "category": "Accounts & Statements",
    "description": "Enter any additional notes about the statement details.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "stilbirths",
    "name": "Stilbirths",
    "category": "Women's Health History",
    "description": "How many previous stillbirths has this person had?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "stop_tobacco_use",
    "name": "When Stopped Tobacco Use",
    "category": "Health Information",
    "description": "If former tobacco user, when did this person quit?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "stories",
    "name": "Stories",
    "category": "Home",
    "description": "How many stories is this home?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "suegery_complications",
    "name": "Complications",
    "category": "Surgery",
    "description": "Were there any complications experienced from this surgery?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_condition",
    "name": "Condition",
    "category": "Surgery",
    "description": "What condition did this treat?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_cost",
    "name": "Cost",
    "category": "Surgery",
    "description": "How much did this surgery cost?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "suegery_date",
    "name": "Date",
    "category": "Surgery",
    "description": "When was this surgery performed?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "suegery_date.day",
    "name": "Date Day",
    "category": "Surgery",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "suegery_date.month",
    "name": "Date Month",
    "category": "Surgery",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "suegery_date.year",
    "name": "Date Year",
    "category": "Surgery",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "suegery_hospitalization",
    "name": "Hospitalization",
    "category": "Surgery",
    "description": "Was hospitalization required after this surgery?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "suegery_hospitalization_duration",
    "name": "Hospitalization Duration",
    "category": "Surgery",
    "description": "If yes, what was the length of stay?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "suegery_notes",
    "name": "Notes",
    "category": "Surgery",
    "description": "Enter any additional notes about this surgery.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_performed_at",
    "name": "Performed At",
    "category": "Surgery",
    "description": "Where was this surgery performed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_performed_by",
    "name": "Performed By",
    "category": "Surgery",
    "description": "Who was this surgery performed by?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_record_name",
    "name": "Gem Name",
    "category": "Surgery",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "suegery_type",
    "name": "Type",
    "category": "Surgery",
    "description": "What type of surgery was performed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "sunscreen_use",
    "name": "Sunscreen Use",
    "category": "Health Information",
    "description": "Does this person regularly use sunscreen?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "sweater_fabrics",
    "name": "Sweater Fabrics",
    "category": "Women's Clothing Preferences",
    "description": "What sweater fabrics do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "sweaters_style",
    "name": "Sweater Style",
    "category": "Women's Clothing Preferences",
    "description": "What style sweater do you like?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "swelling_lumps",
    "name": "Swelling/Lumps",
    "category": "Dental History",
    "description": "Is the patient aware of any swelling or lumps?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "swimming_pool",
    "name": "Swimming Pool",
    "category": "Home",
    "description": "Does this home have a swimming pool?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "symptoms",
    "name": "Symptoms",
    "category": "Health History",
    "description": "Please select any symptons this person is currently experiencing.",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "tax_exemptions",
    "name": "Exemptions",
    "category": "Tax & Income",
    "description": "How many exemptions were claimed on this tax return?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "tax_form",
    "name": "Tax Form",
    "category": "Tax & Income",
    "description": "What type of tax form(s) were filed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tax_income_name",
    "name": "Gem Name",
    "category": "Tax & Income",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tax_income_notes",
    "name": "Tax & Income Notes",
    "category": "Tax & Income",
    "description": "Enter any additional notes about this tax return.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tax_investments",
    "name": "Investments",
    "category": "Tax & Income",
    "description": "What was the total net worth of investments?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "tax_total_assets",
    "name": "Total Assets",
    "category": "Tax & Income",
    "description": "What is the total for all assets?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "tax_year",
    "name": "Tax Year",
    "category": "Tax & Income",
    "description": "What year is this tax information for?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "teeth_sensitivity",
    "name": "Teeth Sensitivity",
    "category": "Dental History",
    "description": "Are the patient's teeth sensitive to hot, cold, sweets or pressure?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "tempormandibular_treatments",
    "name": "Tempormandibular Treatments",
    "category": "Dental History",
    "description": "Does the patient do treatments for tempormandibular disorders (also known as TMJ)?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "test_subscores",
    "name": "Test Subscores",
    "category": "Test Scores",
    "description": "What scores did you receive for each section of the test or assesment?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "testscore_gem_name",
    "name": "Gem Name",
    "category": "Test Scores",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "testscore_overall_score",
    "name": "Overall Score",
    "category": "Test Scores",
    "description": "What was the overall score for the test or assessment?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "testscore_test_date",
    "name": "Test Date",
    "category": "Test Scores",
    "description": "When was the test or assessment completed?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "testscore_test_location",
    "name": "Testing Location",
    "category": "Test Scores",
    "description": "Where was the test or assessment completed?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "testscore_test_name",
    "name": "Test Name",
    "category": "Test Scores",
    "description": "What is the name of the test or assessment taken?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "testscore_test_notes",
    "name": "Test Notes",
    "category": "Test Scores",
    "description": "Enter any additional notes about this test or assessment.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tetanus_vaccine_date",
    "name": "Tetanus Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the tetanus vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "tired_jaws",
    "name": "Tired Jaws",
    "category": "Dental History",
    "description": "Does the patient have tired jaws, especially in the morning?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "tooth_damage",
    "name": "Tooth Damage",
    "category": "Dental History",
    "description": "Does the patient have teeth/fillings break frequently?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "total_donation",
    "name": "Total Donation",
    "category": "Charity",
    "description": "How much have you donated overall?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tracker_date",
    "name": "Date",
    "category": "Tracker",
    "description": "What date did this happen?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "tracker_name",
    "name": "Gem Name",
    "category": "Tracker",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tracker_notes",
    "name": "Data Notes",
    "category": "Tracker",
    "description": "Enter any additional notes about this tracker entry.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tracker_notes_field",
    "name": "Tracker Notes",
    "category": "Tracker",
    "description": "Enter any additional notes about this tracker.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tracker_time",
    "name": "Time",
    "category": "Tracker",
    "description": "What time did this happen?",
    "privatePData": null,
    "semanticType": "time",
    "uri": null
  },
  {
    "id": "tracker_type",
    "name": "Tracker Type",
    "category": "Tracker",
    "description": "What are you tracking?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tracker_unit_of_measure",
    "name": "Unit of Measure",
    "category": "Tracker",
    "description": "What is the unit of measure for the value you are tracking? (i.e. lbs, miles, number, etc.)",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "tracker_value",
    "name": "Value",
    "category": "Tracker",
    "description": "Enter the details of the information you are tracking.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tran_union_website",
    "name": "TransUnion Website",
    "category": "Credit Report",
    "description": "What is the TransUnion website?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "trans_union_customer_service",
    "name": "TransUnion Customer Service",
    "category": "Credit Report",
    "description": "What is the customer service phone number for TransUnion?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.area_code",
    "name": "TransUnion Customer Service Area Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.country_code",
    "name": "TransUnion Customer Service Country Code",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.extension",
    "name": "TransUnion Customer Service Extension",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.first_three",
    "name": "TransUnion Customer Service First Three in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.last_four",
    "name": "TransUnion Customer Service Last Four in Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_customer_service.number",
    "name": "TransUnion Customer Service Local Number",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_score",
    "name": "TransUnion Score",
    "category": "Credit Report",
    "description": "What is the TransUnion score?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trans_union_score_date",
    "name": "TransUnion Score Date",
    "category": "Credit Report",
    "description": "What is the most recent date when the TransUnion score was checked?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "trans_union_score_date.day",
    "name": "TransUnion Score Date Day",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "trans_union_score_date.month",
    "name": "TransUnion Score Date Month",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "trans_union_score_date.year",
    "name": "TransUnion Score Date Year",
    "category": "Credit Report",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number",
    "name": "Customer Service Phone Number",
    "category": "Memberships & Rewards Programs",
    "description": "What is the phone number for customer service?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.area_code",
    "name": "Customer Service Phone Number Area Code",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.country_code",
    "name": "Customer Service Phone Number Country Code",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.extension",
    "name": "Customer Service Phone Number Extension",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.first_three",
    "name": "Customer Service Phone Number First Three in Local Number",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.last_four",
    "name": "Customer Service Phone Number Last Four in Local Number",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_customer_service_phone_number.number",
    "name": "Customer Service Phone Number Local Number",
    "category": "Memberships & Rewards Programs",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_gem_name",
    "name": "Gem Name",
    "category": "Memberships & Rewards Programs",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_membership_number",
    "name": "Membership Number",
    "category": "Memberships & Rewards Programs",
    "description": "What is the membership number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_notes",
    "name": "Membership & Rewards Program Notes",
    "category": "Memberships & Rewards Programs",
    "description": "Enter any additional notes about this membership or rewards program.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_program_name",
    "name": "Program Name",
    "category": "Memberships & Rewards Programs",
    "description": "What is the name of this memberhip or rewards program?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "travel_rewards_website",
    "name": "Website",
    "category": "Memberships & Rewards Programs",
    "description": "What is the web address for online account management?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "trusted_traveler",
    "name": "Gem Name",
    "category": "Trusted Traveler",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "trusted_traveler_notes",
    "name": "Trusted Traveler Notes",
    "category": "Trusted Traveler",
    "description": "Enter any additional details about this person's trusted traveler info.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "tubal_pregnancies",
    "name": "Tubal Pregnancies",
    "category": "Women's Health History",
    "description": "How many tubal pregnancies has this person had?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "twitter_name",
    "name": "Twitter Username",
    "category": "Contact Info",
    "description": "What is the Twitter username?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "type_of_alcohol",
    "name": "Type of Alcohol",
    "category": "Health Information",
    "description": "What type of alcohol is typically consumed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "type_of_loan",
    "name": "Type of Loan",
    "category": "Loan",
    "description": "What type of loan is it?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "type_of_tobacco",
    "name": "Type of Tobacco",
    "category": "Health Information",
    "description": "What type of tobacco did/does this person use?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "types_of_drugs_used",
    "name": "Types of Drugs Used",
    "category": "Health Information",
    "description": "If so, what kinds of drugs?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "umbrella_policy",
    "name": "Umbrella Policy",
    "category": "Home Insurance",
    "description": "Do you have an umbrella policy?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "umbrella_policy_coverage",
    "name": "Umbrella Policy Coverage",
    "category": "Home Insurance",
    "description": "How much coverage does your umbrella policy have?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "umbrella_policy_number",
    "name": "Umbrella Policy Number",
    "category": "Home Insurance",
    "description": "What is your umbrella policy number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "undershirt_style",
    "name": "Undershirt Style",
    "category": "Men's Clothing Preferences",
    "description": "What style of undershirt do you prefer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "unexplained_vaginal_bleeding",
    "name": "Unexplained Vaginal Bleeding",
    "category": "Women's Health History",
    "description": "Does this person have unexplained vaginal bleeding?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "uninsured_motorist_coverage_bodily_injury",
    "name": "Uninsured Motorist Coverage - Bodily Injury",
    "category": "Vehicle Insurance",
    "description": "What is the uninsured motorist coverage for bodily injury?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "uninsured_motorist_coverage_property_damage",
    "name": "Uninsured Motorist Coverage - Property Damage",
    "category": "Vehicle Insurance",
    "description": "What is the uninsured motorist coverage for property damage?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "vaccination_date",
    "name": "Vaccination Date",
    "category": "Pet Vaccinations",
    "description": "When was this vaccination completed?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vaccination_expiration",
    "name": "Vaccination Expiration",
    "category": "Pet Vaccinations",
    "description": "When does this vaccination expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vaccination_notes",
    "name": "Vaccination Notes",
    "category": "Pet Vaccinations",
    "description": "Enter any additional notes about this pet's vaccinations.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vaccination_side_effects",
    "name": "Side Effects",
    "category": "Pet Vaccinations",
    "description": "What side effects, if any, were experienced?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vaccination_type",
    "name": "Vaccination Type",
    "category": "Pet Vaccinations",
    "description": "What vaccination was completed?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "vaginal_discharge",
    "name": "Vaginal Discharge",
    "category": "Women's Health History",
    "description": "Does this person have an unusual vaginal discharge?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "varicella_vaccine_date",
    "name": "Varicella Vaccine Date",
    "category": "Immunizations & Screenings",
    "description": "When did this person receive the varicella vaccine?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vehicle_accident_witnesses_name",
    "name": "Gem Name",
    "category": "Vehicle Accident Witnesses",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_expiration_date",
    "name": "Insurance Expiration Date",
    "category": "Vehicle Insurance",
    "description": "When does this policy expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vehicle_expiration_date.day",
    "name": "Insurance Expiration Date Day",
    "category": "Vehicle Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_expiration_date.month",
    "name": "Insurance Expiration Date Month",
    "category": "Vehicle Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_expiration_date.year",
    "name": "Insurance Expiration Date Year",
    "category": "Vehicle Insurance",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_issued",
    "name": "Date Issued",
    "category": "Vehicle Paperwork",
    "description": "When was the title issued?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_issued.day",
    "name": "Date Issued Day",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_issued.month",
    "name": "Date Issued Month",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_issued.year",
    "name": "Date Issued Year",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_passed",
    "name": "Date Passed",
    "category": "Vehicle Paperwork",
    "description": "When did the vehicle pass the test?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_passed.day",
    "name": "Date Passed Day",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_passed.month",
    "name": "Date Passed Month",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_date_passed.year",
    "name": "Date Passed Year",
    "category": "Vehicle Paperwork",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_license_plate_issuing_provinces",
    "name": "License Plate Issuing Province",
    "category": "Vehicle Paperwork",
    "description": "In which province is your vehicle currently registered?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_license_plate_issuing_state",
    "name": "License Plate Issuing State",
    "category": "Vehicle Paperwork",
    "description": "In which state is your vehicle currently registered?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_license_plate_number",
    "name": "License Plate Number",
    "category": "Vehicle Paperwork",
    "description": "What is your car's license plate number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_name",
    "name": "Gem Name",
    "category": "Vehicle Paperwork",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_notes",
    "name": "Vehicle Paperwork Notes",
    "category": "Vehicle Paperwork",
    "description": "Enter any additional notes about the paperwork for this vehicle.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_vehicle_emissions_test_transaction_identification_number",
    "name": "Vehicle Emissions Test Transaction Identification Number",
    "category": "Vehicle Paperwork",
    "description": "What is the Transaction Identification Number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_paperwork_vehicle_title_number",
    "name": "Vehicle Title Number",
    "category": "Vehicle Paperwork",
    "description": "What is the Vehicle Title Number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_value_base_price",
    "name": "Base Price",
    "category": "Value",
    "description": "What is the base price for this item (MSRP)?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "vehicle_value_complx_condition",
    "name": "Condition",
    "category": "Value",
    "description": "What is the condition of the vehicle?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "vehicle_value_complx_date",
    "name": "Date",
    "category": "Value",
    "description": "On what date did you calculate the value?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_value_complx_trade_in_value",
    "name": "Value",
    "category": "Value",
    "description": "What is the current value of this item?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "vehicle_value_current_value_notes",
    "name": "Current Value Notes",
    "category": "Value",
    "description": "Enter any additional notes about this item's current value.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_value_name",
    "name": "Gem Name",
    "category": "Value",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_value_price_paid",
    "name": "Price Paid",
    "category": "Value",
    "description": "What did you pay for this item?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "vehicle_value_purchase_at",
    "name": "Purchased At",
    "category": "Value",
    "description": "Where was this items purchased from?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicle_value_purchase_date",
    "name": "Purchase Date",
    "category": "Value",
    "description": "When did you purchase this item?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vehicle_value_purchase_date.day",
    "name": "Purchase Date Day",
    "category": "Value",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_value_purchase_date.month",
    "name": "Purchase Date Month",
    "category": "Value",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_value_purchase_date.year",
    "name": "Purchase Date Year",
    "category": "Value",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vehicle_value_value_notes",
    "name": "Value Notes",
    "category": "Value",
    "description": "Enter any additional notes about this item.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vehicles_involved_in_accident_name",
    "name": "Gem Name",
    "category": "Vehicles Involved in Accident",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_affiliation",
    "name": "Affiliation",
    "category": "Veteran Health Identification Card",
    "description": "What military affiliation is this person a part of?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number",
    "name": "Contact Number",
    "category": "Veteran Health Identification Card",
    "description": "What is the contact number for this card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.area_code",
    "name": "Contact Number Area Code",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.country_code",
    "name": "Contact Number Country Code",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.extension",
    "name": "Contact Number Extension",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.first_three",
    "name": "Contact Number First Three in Local Number",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.last_four",
    "name": "Contact Number Last Four in Local Number",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_contact_number.number",
    "name": "Contact Number Local Number",
    "category": "Veteran Health Identification Card",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_first_name_on_card",
    "name": "First Name on Card",
    "category": "Veteran Health Identification Card",
    "description": "What is the first name on the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_health_identification_card",
    "name": "Gem Name",
    "category": "Veteran Health Identification Card",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_health_notes",
    "name": "Veteran Health Notes",
    "category": "Veteran Health Identification Card",
    "description": "Enter any additional details about this person's veteran health identification Card info.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_last_name_on_card",
    "name": "Last Name on Card",
    "category": "Veteran Health Identification Card",
    "description": "What is the last name on the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_member_id",
    "name": "Member ID",
    "category": "Veteran Health Identification Card",
    "description": "What is this person's member ID?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_plan_id",
    "name": "Plan ID",
    "category": "Veteran Health Identification Card",
    "description": "What is this person's plan ID?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "veteran_service_agency",
    "name": "Service/Agency",
    "category": "Veteran Health Identification Card",
    "description": "What military service/agency is this person a part of?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "veteran_website",
    "name": "Website",
    "category": "Veteran Health Identification Card",
    "description": "What is the website for the card?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "visio_glasses_notes",
    "name": "Glasses Notes",
    "category": "Vision",
    "description": "Enter any additional notes about this person's glasses.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vision_decord_for",
    "name": "Gem Name",
    "category": "Vision",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vision_eye_color",
    "name": "Eye Color",
    "category": "Vision",
    "description": "What is this person's eye color?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "vision_eye_exam",
    "name": "Eye Exam",
    "category": "Vision",
    "description": "When was this person's last eye exam?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "vision_eye_exam.day",
    "name": "Eye Exam Day",
    "category": "Vision",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vision_eye_exam.month",
    "name": "Eye Exam Month",
    "category": "Vision",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vision_eye_exam.year",
    "name": "Eye Exam Year",
    "category": "Vision",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "vision_left_eye",
    "name": "Vision Left Eye",
    "category": "Vision",
    "description": "What is the left eye visual acuity measurement (20/XX)?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vision_reading_glasses_notes",
    "name": "Reading Glasses Notes",
    "category": "Vision",
    "description": "Enter any additional notes about this person's reading glasses.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vision_right_eye",
    "name": "Vision Right Eye",
    "category": "Vision",
    "description": "What is the right eye visual acuity measurement (20/XX)?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vision_strength",
    "name": "Strength",
    "category": "Vision",
    "description": "What is the strength for this person's reading glasses?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vitals_notes",
    "name": "Health Notes",
    "category": "Health Information",
    "description": "Enter any additional notes about this person's health.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vpn_access_instructions",
    "name": "VPN Access Instructions",
    "category": "Networking",
    "description": "Enter any special instructions for accessing the VPN.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "vpn_url",
    "name": "VPN URL",
    "category": "Networking",
    "description": "What is the URL for the VPN?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "waist_style",
    "name": "Waist Style",
    "category": "Women's Clothing Preferences",
    "description": "What kind of rise do you prefer on your pants?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "warranty_cost",
    "name": "Warranty Cost",
    "category": "Warranty",
    "description": "What price did you pay for the warranty?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "warranty_expiration_date",
    "name": "Warranty Expiration Date",
    "category": "Warranty",
    "description": "When does this warranty expire?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "warranty_expiration_date.day",
    "name": "Warranty Expiration Date Day",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "warranty_expiration_date.month",
    "name": "Warranty Expiration Date Month",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "warranty_expiration_date.year",
    "name": "Warranty Expiration Date Year",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "warranty_notes",
    "name": "Extended Warranty Notes",
    "category": "Warranty",
    "description": "Enter any notes about your extended warranty.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_number",
    "name": "Warranty Number",
    "category": "Warranty",
    "description": "What is the warranty number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_period",
    "name": "Warranty Period",
    "category": "Warranty",
    "description": "What is the length of the warranty period?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "warranty_phone",
    "name": "Warranty Phone",
    "category": "Warranty",
    "description": "What is the warranty contact phone number?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.area_code",
    "name": "Warranty Phone Area Code",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.country_code",
    "name": "Warranty Phone Country Code",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.extension",
    "name": "Warranty Phone Extension",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.first_three",
    "name": "Warranty Phone First Three in Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.last_four",
    "name": "Warranty Phone Last Four in Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_phone.number",
    "name": "Warranty Phone Local Number",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_product",
    "name": "Gem Name",
    "category": "Warranty",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "warranty_purchase_date",
    "name": "Purchase Date",
    "category": "Warranty",
    "description": "When was this item purchased?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "warranty_purchase_date.day",
    "name": "Purchase Date Day",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "warranty_purchase_date.month",
    "name": "Purchase Date Month",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "warranty_purchase_date.year",
    "name": "Purchase Date Year",
    "category": "Warranty",
    "description": "",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  },
  {
    "id": "website",
    "name": "Website",
    "category": "Health Insurance",
    "description": "What is the website address for the health insurance provider?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "website_for_provider",
    "name": "Website",
    "category": "Accounts & Statements",
    "description": "What is the website associated with this bill?",
    "privatePData": null,
    "semanticType": "url",
    "uri": null
  },
  {
    "id": "wi_fi_download_speed",
    "name": "Download Speed",
    "category": "Wi-Fi",
    "description": "What is the download speed on this Wi-Fi network?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_gem_name",
    "name": "Gem Name",
    "category": "Wi-Fi",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_home_wi_fi_notes",
    "name": "Wi-Fi Notes",
    "category": "Wi-Fi",
    "description": "Enter any additional notes about connecting to this Wi-Fi.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_network",
    "name": "Wi-Fi Network (SSID)",
    "category": "Wi-Fi",
    "description": "What is the name for your Wi-Fi network?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_password",
    "name": "Wi-Fi Password",
    "category": "Wi-Fi",
    "description": "What is your Wi-Fi Password?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_router_location",
    "name": "Router Location",
    "category": "Wi-Fi",
    "description": "Where is your router located?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wi_fi_upload_speed",
    "name": "Upload Speed",
    "category": "Wi-Fi",
    "description": "What is the upload speed on this Wi-Fi network?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "wiki_purpose",
    "name": "Wiki Purpose",
    "category": "Networking",
    "description": "What is this used for?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "witness_address",
    "name": "Witness address",
    "category": "Vehicle Accident Witnesses",
    "description": "What is the address for this witness?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "witness_email",
    "name": "Witness email",
    "category": "Vehicle Accident Witnesses",
    "description": "What is the email address for this witness?",
    "privatePData": null,
    "semanticType": "email",
    "uri": null
  },
  {
    "id": "witness_notes",
    "name": "Witness Notes",
    "category": "Vehicle Accident Witnesses",
    "description": "Enter any additional details about this witness.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "witness_phone",
    "name": "Witness phone",
    "category": "Vehicle Accident Witnesses",
    "description": "What is the phone number for this witness?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "womens_clothing_nickname",
    "name": "Gem Name",
    "category": "Women's Clothing Preferences",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "womens_health_history_name",
    "name": "Gem Name",
    "category": "Women's Health History",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "womens_health_history_notes",
    "name": "Women's Health History Notes",
    "category": "Women's Health History",
    "description": "Enter any notes about this women's health history record.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_associations",
    "name": "Associations",
    "category": "Work",
    "description": "What associations do you belong to?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_bonus",
    "name": "Bonus",
    "category": "Work",
    "description": "What was the annual bonus received?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "work_commission",
    "name": "Commission",
    "category": "Work",
    "description": "If this position is commission based, what was the annual commission?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "work_company",
    "name": "Company",
    "category": "Work",
    "description": "Work Company name",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_company_detail_notes",
    "name": "Company Detail Notes",
    "category": "Work",
    "description": "Enter any additional notes about this company.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_company_size",
    "name": "Company Size",
    "category": "Work",
    "description": "How many employees does this company have?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_company_status",
    "name": "Company Status",
    "category": "Work",
    "description": "Is this a publicly traded or a privately held company?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "work_current_employer",
    "name": "Current Employer",
    "category": "Work",
    "description": "Is this your current employer?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "work_current_employer_address",
    "name": "Work Address",
    "category": "Work",
    "description": "Work Company address",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_city",
    "name": "Employer City",
    "category": "Work",
    "description": "What city is this employer located in?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "work_current_employer_email",
    "name": "Work Email",
    "category": "Work",
    "description": "Work Company Email",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_phone",
    "name": "Work Phone",
    "category": "Work",
    "description": "Work Company Phone",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_post_code",
    "name": "Work Post code",
    "category": "Work",
    "description": "Work Company post code",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_province",
    "name": "Work Province",
    "category": "Work",
    "description": "Work Company province",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_revenue_agency",
    "name": "Work Revenue Agency",
    "category": "Work",
    "description": "Work Revenue Agency",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_state",
    "name": "Employer State",
    "category": "Work",
    "description": "What state is this employer located in?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "work_current_employer_street_number",
    "name": "Work Street Number",
    "category": "Work",
    "description": "Work Company street number",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_current_employer_vat",
    "name": "Work VAT",
    "category": "Work",
    "description": "Work VAT",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_dress_code",
    "name": "Work Dress Code",
    "category": "Women's Clothing Preferences",
    "description": "What is your dress code at work?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "work_employer",
    "name": "Employer/Company",
    "category": "Work",
    "description": "What is the name of the employer?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_end_date",
    "name": "End Date",
    "category": "Work",
    "description": "When did you stop working for this employer?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "work_gem_name",
    "name": "Gem Name",
    "category": "Work",
    "description": "This gem will be saved as this name.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_honors",
    "name": "Honors",
    "category": "Work",
    "description": "Please list any honors you have received.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_income",
    "name": "Income",
    "category": "Work",
    "description": "What is your hourly or annual salary income?",
    "privatePData": null,
    "semanticType": "real",
    "uri": null
  },
  {
    "id": "work_industry",
    "name": "Industry",
    "category": "Work",
    "description": "In which industry does this company operate?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_job_description",
    "name": "Job Description",
    "category": "Work",
    "description": "Describe your responsibilities in this position.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_job_title",
    "name": "Job Title",
    "category": "Work",
    "description": "What was/is your position or title at this employer?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_notes",
    "name": "Work Notes",
    "category": "Work",
    "description": "Enter any additional notes about this job.",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_start_date",
    "name": "Start Date",
    "category": "Work",
    "description": "When did you start working for this employer?",
    "privatePData": null,
    "semanticType": "date",
    "uri": null
  },
  {
    "id": "work_stock_marker_ticker",
    "name": "Stock Market Ticker",
    "category": "Work",
    "description": "What is the stock market ticker for this company?",
    "privatePData": null,
    "semanticType": "string",
    "uri": null
  },
  {
    "id": "work_wage",
    "name": "Wage",
    "category": "Work",
    "description": "Is this a salary or hourly paid position?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "year",
    "name": "Year",
    "category": "Vehicle",
    "description": "What is the year of manufacture of your vehicle?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "year_built",
    "name": "Year Built",
    "category": "Home",
    "description": "In what year was this home built?",
    "privatePData": null,
    "semanticType": "enum",
    "uri": null
  },
  {
    "id": "years_at_residence",
    "name": "Years at Residence",
    "category": "Home",
    "description": "How many years have you owned this home?",
    "privatePData": null,
    "semanticType": "integer",
    "uri": null
  }
]);