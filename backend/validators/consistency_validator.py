def check_consistency(schema):

    errors = []

    db_tables = [table["name"] for table in schema["database"]]

    for api in schema["apis"]:

        if "/contacts" in api["path"] and "contacts" not in db_tables:
            errors.append("Contacts API exists without contacts table")

    return errors