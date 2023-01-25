import React from 'react'

export default function MyComponent() {
  return (
    <div>
      <h1>Hello World</h1>
      <p className="my-paragraph">This is my component</p>
      <style jsx>{`
        .my-paragraph {
          color: red;
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}


