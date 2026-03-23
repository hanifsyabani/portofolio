"use client";

import { Send, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { PostMessage } from "@/service/contact";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"),
  message: z.string().min(1, "Message is required"),
})
type FormFields = z.infer<typeof schema>

export default function ContactForm() {


  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  })

  const { mutate: postMessage, isPending } = useMutation({
    mutationFn: (data: FormFields) => PostMessage(data),
    onSuccess: () => {
      toast.success("Message sent successfully")
      reset()
    }, onError: (error: any) => {
      toast.error(error.message)
    }

  })

  function onSubmit(data: FormFields) {
    postMessage(data)
  }


  const inputBase =
    "w-full rounded-xl  border dark:border-white/[0.08] bg-white/[0.03] px-3 py-5 text-sm dark:text-neutral-100 text-neutral-900 placeholder-neutral-600 outline-none transition-all duration-300 focus:border-blue-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-400/20";

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
          Send a Message
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          Have a question or want to work together? Fill out the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 space-y-1.5">
            <Label htmlFor="contact-name" className="text-xs font-medium dark:text-neutral-400 text-neutral-600">
              Name
            </Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className={`${inputBase} ${errors.name ? "border-red-400/50" : ""}`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-[11px] text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="flex-1 space-y-1.5">
            <Label htmlFor="contact-email" className="text-xs font-medium dark:text-neutral-400 text-neutral-600">
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              className={`${inputBase} ${errors.email ? "border-red-400/50" : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-message" className="text-xs font-medium dark:text-neutral-400 text-neutral-600">
            Message
          </Label>
          <Textarea
            id="contact-message"
            rows={8}
            placeholder="Tell me about your project, idea, or just say hi..."
            className={`${inputBase} h-20 ${errors.message ? "border-red-400/50" : ""}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-linear-to-r from-blue-500/80 to-blue-600/80 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
