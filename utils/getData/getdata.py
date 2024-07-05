import pandas as pd
import json

# Load the new CSV file uploaded
file_path_new = './all.csv'  # Ensure this path points to the correct file location
df_new = pd.read_csv(file_path_new)

# Rename columns with spaces
df_new.rename(columns={
    '内容 / 必要な経験 (簡潔に!)': '内容',
    '実施時期 / 待遇': '実施時期-待遇'
}, inplace=True)

# Convert the entire DataFrame to a list of dictionaries (one dictionary per row)
data_list = df_new.to_dict(orient='records')

# Helper function to format Python dictionary to JavaScript object string
def dict_to_js_obj(data):
    js_obj = "{\n"
    for record in data:
        js_obj += "  {\n"
        for key, value in record.items():
            if pd.isna(value):
                value = 'null'
            elif isinstance(value, str):
                value = f'"{value}"'
            js_obj += f'    "{key}": {value},\n'
        js_obj = js_obj.rstrip(",\n") + "\n  },\n"
    js_obj = js_obj.rstrip(",\n") + "\n}"
    return js_obj

# Convert the list of dictionaries to a JavaScript object string
js_obj_str = dict_to_js_obj(data_list)

# Print the JavaScript object string
print(f"const data = {js_obj_str};")
