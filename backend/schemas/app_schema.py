from pydantic import BaseModel
from typing import List, Dict

class Page(BaseModel):
    name: str
    components: List[str]

class APIEndpoint(BaseModel):
    path: str
    method: str

class Table(BaseModel):
    name: str
    columns: List[str]

class AppSchema(BaseModel):
    pages: List[Page]
    apis: List[APIEndpoint]
    database: List[Table]
    roles: Dict[str, List[str]]