import React from 'react'

type IProps = {
  text: string
}

export default function Ribbon({ text }: IProps) {
  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[20px] right-[-68px] w-[200px] transform rotate-45 bg-primary text-white text-center py-1 px-4 font-semibold text-sm shadow-lg">
        {text}
      </div>
    </div>
  )
}
