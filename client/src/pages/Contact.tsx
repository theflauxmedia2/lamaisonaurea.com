import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InquiryInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InquiryInput>({
    resolver: zodResolver(api.inquiries.create.input),
  });

  const onSubmit = (data: InquiryInput) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Inquiry Sent",
          description: "Thank you for reaching out. We will be in touch shortly.",
        });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            
            <div className="space-y-12">
              <h1 className="font-serif text-5xl md:text-6xl text-foreground">Start a Conversation</h1>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                We are currently accepting new projects for {new Date().getFullYear()}. 
                Please tell us about your vision, and we will get back to you to schedule a consultation.
              </p>
              
              <div className="space-y-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Studio</h3>
                  <p className="text-xl font-serif">BTM Layout, Bengaluru</p>
                  <p className="text-foreground/70 font-light">Bengaluru, Karnataka</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Email</h3>
                  <p className="text-xl font-serif hover:text-accent transition-colors">
                    <a href="mailto:hello@lamaisonaurea.com">hello@lamaisonaurea.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Phone</h3>
                  <p className="text-xl font-serif">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 shadow-sm border border-border/30">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-muted-foreground">Name</label>
                  <input
                    {...form.register("name")}
                    className="w-full border-b border-border py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder:text-muted-foreground/30"
                    placeholder="Jane Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    {...form.register("email")}
                    className="w-full border-b border-border py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder:text-muted-foreground/30"
                    placeholder="jane@example.com"
                    type="email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    {...form.register("message")}
                    rows={6}
                    className="w-full border-b border-border py-2 focus:outline-none focus:border-accent transition-colors bg-transparent resize-none placeholder:text-muted-foreground/30"
                    placeholder="Tell us about your project..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full rounded-none mt-4"
                >
                  {isPending ? (
                    <span className="flex items-center"><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</span>
                  ) : "Send Inquiry"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
