import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import blue_luma_icon from "../../assets/icons/blue_luma_icon.png";

export default function ContactMeFormPopupModal({ open, setOpen }) {
  return (
    <>
      <Dialog
        open={open}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="sm"
      >
        <DialogHeader>Hello, Adventurer!</DialogHeader>
        <div className="flex justify-center p-4">
          <img src={blue_luma_icon} alt="Blue Luma" className="w-12" />
        </div>
        <DialogBody className="text-center font-normal">
          Thank you for reaching out to me! Your message has been sent, and I'm
          excited to embark on this journey with you.
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <button
            onClick={() => setOpen(false)}
            className="bg-m-light-blue text-white rounded-md text-center font-semibold p-2 w-full max-w-48 hover:bg-opacity-95"
          >
            Let&apos;s Go!
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
