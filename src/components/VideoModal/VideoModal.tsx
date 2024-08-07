import { createPortal } from "react-dom";
import classNames from "classnames";
import scrollLock from "scroll-lock";

const VideoModal = ({ children, closeModal }: { children: JSX.Element; closeModal: (arg: boolean) => void }) => {
    return createPortal(
        <div
            className={classNames("fixed top-0 w-full h-full bg-[rgba(0,0,0,0.60)] overflow-auto min-w-[320px] z-20")}
            onClick={() => {
                closeModal(false);
                scrollLock.enablePageScroll();
            }}
        >
            <div className="h-full py-5 px-5 flex justify-center items-center sm:p-0">
                <div
                    className={classNames(
                        "my-blur-filter flex justify-center items-center bg-[rgba(35,38,57,0.1)] w-[884px] h-[488px] relative duration-[300ms] border border-[#fff] rounded-[37px] overflow-hidden sm:h-full sm:border-0 sm:rounded-none",
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative bg-[#d9d9d9] h-[calc(100%-100px)] w-[calc(100%-100px)] rounded-[24px] overflow-hidden sm:w-full sm:h-[215px] sm:mx-5">
                        {children}
                        {false && (
                            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <svg viewBox="0 0 128 128" className="w-[128px] h-[128px] sm:w-[83px] sm:h-[83px]">
                                    <ellipse opacity="0.2" cx="64.0972" cy="64.124" rx="63.4272" ry="63.425" fill="black" />
                                    <path d="M52.2598 86.145V42.1033L91.9341 63.912L52.2598 86.145Z" fill="white" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <button
                        className="absolute top-[29px] right-[29px]"
                        onClick={() => {
                            closeModal(false);
                            scrollLock.enablePageScroll();
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15">
                            <path
                                d="M13.6562 13.2087L7.65627 7.20876M7.65627 7.20876L1.65625 1.20874M7.65627 7.20876L13.6563 1.20874M7.65627 7.20876L1.65625 13.2088"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal") as HTMLElement,
    );
};

export default VideoModal;
