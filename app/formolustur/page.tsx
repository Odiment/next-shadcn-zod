"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeToggle } from '@/components/ThemeToggle'
import { useForm } from 'react-hook-form'
import Link from "next/link"

import { registerSchema } from "@/validators/auth"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

type Input = z.infer<typeof registerSchema>

export default function FormOlustur() {

    const form = useForm<Input>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            name: "",
            studentId: "",
            year: "",
            password: "",
            confirmPasword: "",
          },
    })

    function onSubmit (data: Input) {
        console.log(data)
    }

  return (    
    <>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Adınız Soyadınız..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Kullanıcı adınız veya adınız soyadınız
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="E-mail adresiniz..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    E-mail adresiniz
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="studentId"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>StudentId</FormLabel>
                                <FormControl>
                                    <Input placeholder="Öğrenci numaranız..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Eğitim-Öğretim yılı</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {[10, 11, 12, 13].map((year) => {
                                            return (
                                            <SelectItem value={year.toString()} key={year}>Year {year}</SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    You can manage email addresses in your{" "}
                                    <Link href="/examples/forms">email settings</Link>.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Şifreniz</FormLabel>
                                <FormControl>
                                    <Input placeholder="Şifrenizi giriniz..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Şifrenizi tekrar giriniz</FormLabel>
                                <FormControl>
                                    <Input placeholder="Teyit için tekrar şifrenizi giriniz..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                </CardContent>
{/*                 <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter> */}
                </Card>
            </div>            
        </div>
            <ThemeToggle className="absolute top-2 right-2"/>
        </NextThemesProvider>
    </>
  )
}

