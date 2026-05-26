from pydantic import BaseModel
from typing import List

class IntentSchema(BaseModel):
    app_name: str
    features: List[str]
    roles: List[str]
    description: str