def generate_schema(system_design):

    app_type = system_design["app_type"]

    # CRM
    if app_type == "crm":

        return {

            "pages": [
                {
                    "name": "login",
                    "components": ["form"]
                },
                {
                    "name": "dashboard",
                    "components": ["stats_card", "chart"]
                },
                {
                    "name": "contacts",
                    "components": ["table"]
                }
            ],

            "apis": [
                {
                    "path": "/login",
                    "method": "POST"
                },
                {
                    "path": "/contacts",
                    "method": "GET"
                }
            ],

            "database": [
                {
                    "name": "users",
                    "columns": ["id", "email", "password"]
                },
                {
                    "name": "contacts",
                    "columns": ["id", "name", "email"]
                }
            ],

            "roles": {
                "admin": ["all"],
                "user": ["read"]
            }
        }

    # Ecommerce
    elif app_type == "ecommerce":

        return {

            "pages": [
                {
                    "name": "products",
                    "components": ["product_grid"]
                },
                {
                    "name": "cart",
                    "components": ["cart_items"]
                },
                {
                    "name": "checkout",
                    "components": ["payment_form"]
                }
            ],

            "apis": [
                {
                    "path": "/products",
                    "method": "GET"
                },
                {
                    "path": "/checkout",
                    "method": "POST"
                }
            ],

            "database": [
                {
                    "name": "products",
                    "columns": ["id", "title", "price"]
                },
                {
                    "name": "orders",
                    "columns": ["id", "amount", "status"]
                }
            ],

            "roles": {
                "admin": ["all"],
                "user": ["read"]
            }
        }

    # Hospital
    elif app_type == "hospital":

        return {

            "pages": [
                {
                    "name": "patients",
                    "components": ["patient_table"]
                },
                {
                    "name": "appointments",
                    "components": ["calendar"]
                }
            ],

            "apis": [
                {
                    "path": "/patients",
                    "method": "GET"
                },
                {
                    "path": "/appointments",
                    "method": "POST"
                }
            ],

            "database": [
                {
                    "name": "patients",
                    "columns": ["id", "name", "disease"]
                },
                {
                    "name": "appointments",
                    "columns": ["id", "doctor", "date"]
                }
            ],

            "roles": {
                "admin": ["all"],
                "user": ["read"]
            }
        }

    # LMS
    else:

        return {

            "pages": [
                {
                    "name": "courses",
                    "components": ["course_grid"]
                },
                {
                    "name": "students",
                    "components": ["student_table"]
                }
            ],

            "apis": [
                {
                    "path": "/courses",
                    "method": "GET"
                }
            ],

            "database": [
                {
                    "name": "courses",
                    "columns": ["id", "title", "videos"]
                }
            ],

            "roles": {
                "admin": ["all"],
                "user": ["read"]
            }
        }