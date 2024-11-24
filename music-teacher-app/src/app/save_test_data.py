from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # CORS対応

# ルートエンドポイント
@app.route('/')
def home():
    return "Flask API is running. Use /save endpoint to save data."

# データ保存エンドポイント
@app.route('/save', methods=['POST'])
def save_data():
    # クライアントから送信されたJSONデータを取得
    data = request.json
    instrument = data.get('instrument', '未指定')
    goal = data.get('goal', '未指定')
    level = data.get('level', 1)
    genre = data.get('genre', '未指定')

    # SQLiteデータベース接続と保存
    conn = sqlite3.connect('database.db')  # 'database.db' は同じディレクトリに作成されます
    cursor = conn.cursor()

    # テーブルが存在しない場合は作成
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS test_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            instrument TEXT,
            goal TEXT,
            level INTEGER,
            genre TEXT
        )
    ''')

    # データを挿入
    cursor.execute('''
        INSERT INTO test_data (instrument, goal, level, genre)
        VALUES (?, ?, ?, ?)
    ''', (instrument, goal, level, genre))

    conn.commit()
    conn.close()

    # 成功レスポンスを返す
    return jsonify({"message": "Data saved successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)  # Flaskアプリをデバッグモードで起動
