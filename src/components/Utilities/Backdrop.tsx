const Backdrop = ({ children }: any) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[50] bg-opacity-60">
            {children}
        </div>
    )
}

export default Backdrop
