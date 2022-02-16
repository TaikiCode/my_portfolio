import React, { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"
import "./styles.scss"

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState<string>("")
  const { register, handleSubmit, errors } = useForm()

  // emailjs アカウント情報
  const serviceID: any = process.env.REACT_APP_SERVICE_ID
  const templateID: any = process.env.REACT_APP_TEMPLATE_ID
  const userID: any = process.env.REACT_APP_USER_ID

  // react-hook-form, emailjs
  const onSubmit = (data: any, r: any) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      }, // e.target
      userID
    )
    r.target.reset()
  }

  // emailjs
  const sendEmail = (
    serviceID: string,
    templateID: string,
    variables: any,
    userID: string
  ) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("送信に成功しました！ できるだけ早く返信します。")
      })
      .catch((err) => console.error(`Something went wrong ${err}`))
  }

  return (
    <div id="contacts" className="contacts w-screen p-8">
      <div className="text-center w-full">
        <h1 className="text-3xl">Contact me</h1>
        <p>
          最後までご覧いただきありがとうございました。もし何かコメントがありましたら、下記フォームをご利用ください。
        </p>
        <div className="success-message pt-7">{successMessage}</div>
      </div>

      <div className="w-full py-8 lg:px-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center lg:flex-row p-5"
        >
          <div className="flex flex-col lg:w-1/2 lg:px-10 w-4/5">
            {/* NAME INPUT */}
            <div className="form-control mb-2">
              <input
                type="text"
                className="input font-mono"
                placeholder="お名前"
                name="name"
                ref={register({
                  required: "名前を入力してください",
                  maxLength: {
                    value: 20,
                    message: "20文字以内で入力してください。",
                  },
                })}
              />
            </div>
            <span className="error-message">
              {errors.name && errors.name.message}
            </span>
            {/* EMAIL INPUT */}
            <div className="form-control mb-2">
              <input
                type="email"
                className="input font-mono"
                placeholder="メールアドレス"
                name="email"
                ref={register({
                  required: "メールアドレスを入力してください。",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "それは無効のメールアドレスです。",
                  },
                })}
              />
            </div>
            <span className="error-message">
              {errors.email && errors.email.message}
            </span>
            {/* SUBJECT INPUT */}
            <div className="form-control mb-2">
              <input
                type="text"
                className="input font-mono"
                placeholder="主題"
                name="subject"
                ref={register({
                  required: "主題を入力してください。",
                })}
              />
            </div>
            <span className="error-message">
              {errors.subject && errors.subject.message}
            </span>
          </div>
          <div className="flex flex-col lg:w-1/2 pt-6 lg:p-5 lg:mt-10 w-4/5">
            {/* DESCRIPTION */}
            <div className="form-control">
              <textarea
                className="h-48 input font-mono pt-8"
                placeholder="お問い合わせ内容"
                name="description"
                ref={register({
                  required: "お問い合わせ内容を入力してください。",
                })}
              ></textarea>
            </div>
            <span className="error-message">
              {errors.description && errors.description.message}
            </span>
            <button className="contact-btn font-mono" type="submit">
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts
