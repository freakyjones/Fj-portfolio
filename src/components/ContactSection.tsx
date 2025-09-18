"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  LucideIcon,
  Loader2,
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
  followers: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
  color: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/freakyjoenes",
      color: "hover:text-foreground",
      followers: "2.1k",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/freakyjoenes",
      color: "hover:text-primary",
      followers: "5.8k",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/freakyjoenes",
      color: "hover:text-accent",
      followers: "1.2k",
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      value: "freaky.jones@example.com",
      description: "Best way to reach me",
      color: "text-primary",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Global Remote",
      description: "Available worldwide",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "Usually within 4 hours",
      color: "text-secondary",
    },
    {
      icon: CheckCircle,
      title: "Availability",
      value: "Open to opportunities",
      description: "Ready to start immediately",
      color: "text-green-600",
    },
  ];

  return (
    <section id="contact" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Ready to bring your next project to life? I'm always excited to
            discuss new opportunities, innovative challenges, and potential
            collaborations.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border group h-full rounded-3xl text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div
                    className={`bg-muted ${info.color} mb-4 inline-flex rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-foreground mb-1 font-semibold">
                    {info.title}
                  </h4>
                  <p className="mb-1 text-sm font-medium">{info.value}</p>
                  <p className="text-muted-foreground text-xs">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border rounded-3xl shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-center gap-3">
                  <MessageCircle className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-2xl font-bold">
                    Send a Message
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Have a project in mind? Whether you're a recruiter, hiring
                  manager, or potential collaborator, I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12 rounded-2xl"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12 rounded-2xl"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-foreground font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-12 rounded-2xl"
                      placeholder="What would you like to discuss?"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-xs">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={6}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none rounded-2xl"
                      placeholder="Tell me about your project, requirements, or just say hello! Please include any relevant details about timeline, budget, or specific needs."
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-primary hover:bg-secondary text-primary-foreground w-full rounded-2xl py-4 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Resume Download */}
            <Card className="bg-card border-border rounded-3xl shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-foreground mb-4 text-xl font-bold">
                  Download Resume
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Get a comprehensive overview of my experience, skills, and
                  achievements in a recruiter-friendly format.
                </p>
                <a
                  href="/Abhilash Resume--fj2.pdf"
                  download="FreakyJones_Resume.pdf"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-secondary text-primary-foreground mb-4 w-full rounded-2xl py-4 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button>
                </a>
                <p className="text-muted-foreground text-xs">
                  Last updated: January 2025
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-foreground mb-6 text-center text-xl font-bold">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted/50 text-muted-foreground group hover:bg-muted hover:text-foreground flex items-center gap-4 rounded-2xl p-4 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-background rounded-xl p-2 shadow-sm transition-shadow duration-200 group-hover:shadow-md">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{social.name}</div>
                        <div className="text-muted-foreground text-xs">
                          {social.followers} followers
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="from-primary/5 to-accent/5 border-primary/20 rounded-3xl bg-gradient-to-br shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-foreground mb-6 text-lg font-bold">
                  Quick Facts
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Rate</span>
                    <span className="text-foreground font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Projects Completed
                    </span>
                    <span className="text-foreground font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Client Satisfaction
                    </span>
                    <span className="text-foreground font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Timezone Flexibility
                    </span>
                    <span className="text-foreground font-semibold">
                      Global
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
