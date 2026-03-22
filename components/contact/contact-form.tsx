"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputBase =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-all duration-300 focus:border-blue-400/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-blue-400/20";

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

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email row */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 space-y-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-neutral-400">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`${inputBase} ${errors.name ? "border-red-400/50" : ""}`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-400">{errors.name}</p>
            )}
          </div>

          <div className="flex-1 space-y-1.5">
            <label htmlFor="contact-email" className="text-xs font-medium text-neutral-400">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`${inputBase} ${errors.email ? "border-red-400/50" : ""}`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="text-xs font-medium text-neutral-400">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell me about your project, idea, or just say hi..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`${inputBase} resize-none ${errors.message ? "border-red-400/50" : ""}`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-linear-to-r from-blue-500/80 to-blue-600/80 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-blue-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
        > 
          {status === "sending" && (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              <span>Message Sent!</span>
            </>
          )}
          {status === "error" && <span>Failed to send. Try again.</span>}
          {status === "idle" && (
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
