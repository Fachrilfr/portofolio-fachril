"use client"

import { motion } from "motion/react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { staggerContainer } from "@/lib/animations"

import { SectionHeader } from "@/components/SectionHeader"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"

// ✅ schema
const schema = z.object({
  name: z.string().min(2, "Nama wajib diisi"),
  company: z.string().optional(),
  email: z.string().email("Email tidak valid"),
  phone: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
})

// ✅ ambil type dari schema
type FormData = z.infer<typeof schema>

export const Contact = () => {
  // ✅ kasih generic ke useForm
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // ✅ sekarang data sudah tidak merah
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <motion.section
      id="contact"
      className="mt-30 scroll-mt-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
    >
      <SectionHeader
        subtitle="Contact"
        title="Let’s Make Something Awesome Together!"
      />

      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 max-w-5xl space-y-4"
        variants={staggerContainer(0.2)}
      >
        <FieldGroup>

          <div className="grid md:grid-cols-2 gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input {...field} placeholder="Your name" className="bg-zinc-900 border-zinc-800" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="company"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <Input {...field} placeholder="Company name" className="bg-zinc-900 border-zinc-800" />
                </Field>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input {...field} placeholder="your@email.com" className="bg-zinc-900 border-zinc-800" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <Input {...field} placeholder="+1234567890" className="bg-zinc-900 border-zinc-800" />
                </Field>
              )}
            />
          </div>

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Textarea {...field} placeholder="Write your message..." className="bg-zinc-900 border-zinc-800 min-h-[120px]" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

        </FieldGroup>

        <Button type="submit" className="bg-white text-black hover:bg-gray-200">
          Send Message
        </Button>
      </motion.form>
    </motion.section>
  )
}