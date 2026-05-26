def repair_schema(schema, errors):

    for error in errors:

        if "contacts table" in error:

            schema["database"].append({
                "name": "contacts",
                "columns": ["id", "name", "email"]
            })

    return schema