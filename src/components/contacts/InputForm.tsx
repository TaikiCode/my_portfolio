import { forwardRef, VFC } from "react"

interface Props {
  type: "text" | "email"
  placeholder: string
  name: string
  errorMessage: string | undefined
}

const InputForm = forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, name ,errorMessage }, ref) => {
    return (
      <>
        <div className="form-control mb-2">
          <input
            type={type}
            className="input font-mono"
            placeholder={placeholder}
            name={name}
            ref={ref}
          />
        </div>
        <span className="error-message">{errorMessage}</span>
      </>
    )
  }
)

export default InputForm

{
  /* <div className="form-control mb-2">
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
</span> */
}
