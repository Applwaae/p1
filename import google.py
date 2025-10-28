import google.generativeai as genai
import os  # 导入 os 库来读取环境变量


def ask_gemini(prompt):
    """
    使用 Gemini API 询问一个纯文本问题。

    参数:
    prompt (str): 你想要提出的问题。
    """
    try:
        # --- 安全警告 ---
        # 永远不要把 API 密钥直接写在代码里！
        # 推荐的方法是使用环境变量。
        #
        # 在你的终端 (Terminal/CMD) 中运行:
        # (Windows CMD): set GEMINI_API_KEY=你的AIza...密钥
        # (macOS/Linux): export GEMINI_API_KEY='你的AIza...密钥'

        api_key = "AIzaSyBzfc0Hu8hToiG4DLrzs5GYBpj9IR3kvwU"

        if not api_key:
            print("错误：未找到 GEMINI_API_KEY 环境变量。")
            print("请按照代码中的注释设置环境变量后再运行。")
            return

        genai.configure(api_key=api_key)


        model = genai.GenerativeModel('gemini-2.5-flash')  # 换成最新的 flash 模型

        # --- 这里是关键改动 ---
        # 我们不再传入图片，只传入你的文本问题
        response = model.generate_content(prompt)

        # 打印模型的回复
        print("Gemini 的回复：")
        print(response.text)

    except Exception as e:
        print(f"发生错误：{e}")


if __name__ == '__main__':
    # 在这里定义你的问题
    # 不再需要 image_file
    question = "你好！请你用中文写一首关于上海的五言绝句。"

    # 调用函数
    ask_gemini(question)