import os
import json

def list_files(drive_path="D:/"):
    try:
        files = os.listdir(drive_path)
        print(json.dumps(files))  # 打印 JSON，供 Node 读取
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    list_files()