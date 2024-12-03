import os

def create_project_structure():
    # プロジェクトのルートディレクトリ名
    root_dir = "music_sns"
    
    # 作成するフォルダとファイルの構造を定義
    structure = {
        "static": {
            "css": ["style.css"],
            "js": ["main.js"],
            "images": ["default_avatar.png"]
        },
        "templates": ["base.html", "home.html", "login.html", "register.html", "profile.html"],
        "models": {
            "__init__.py": "",
            "user.py": "",
            "music.py": ""
        },
        "routes": {
            "__init__.py": "",
            "auth.py": "",
            "music.py": "",
            "user.py": ""
        },
        "config.py": "",
        "app.py": "",
        "requirements.txt": ""
    }
    
    # ルートディレクトリを作成
    os.makedirs(root_dir, exist_ok=True)
    
    # 再帰的にフォルダとファイルを作成する関数
    def create_structure(structure, current_path):
        for key, value in structure.items():
            path = os.path.join(current_path, key)
            
            if isinstance(value, dict):
                # フォルダの場合
                os.makedirs(path, exist_ok=True)
                create_structure(value, path)
            elif isinstance(value, list):
                # フォルダとその中のファイルリストの場合
                os.makedirs(path, exist_ok=True)
                for file in value:
                    open(os.path.join(path, file), 'a').close()
            else:
                # 単独のファイルの場合
                open(path, 'a').close()
    
    # 構造を作成
    create_structure(structure, root_dir)
    print("プロジェクトの構造が正常に作成されました！")

if __name__ == "__main__":
    create_project_structure()