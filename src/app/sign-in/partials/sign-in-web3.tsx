'use client'

export const ConnectButton = () => {
  function renderAppkit() {
    // @ts-expect-error
    return <appkit-button />
  }

  return (
    <div className="w-full flex items-center justify-center h-10 rounded-lg bg-[#5773FF]">
      {renderAppkit()}
    </div>
  )
}
