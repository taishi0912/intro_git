time = int(input("現在の時刻は？（0-23の数字で入力） "))
if 5 <= time < 12:
    print("おはようございます！")
elif 12 <= time < 18:
    print("こんにちは！")
else:
    print("こんばんは！")