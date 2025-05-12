
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Award, BookOpen, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutMe() {
  return (
    <motion.div 
      className="mt-12 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-cipher-primary bg-opacity-10 pb-6">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-cipher-primary" />
            <CardTitle className="text-2xl text-cipher-primary">About Me</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-600 mt-1">
            Developer of this Caesar Cipher Application
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4 text-gray-700">
          <p>
            I am P. Ganesh Krishna Reddy, a cybersecurity enthusiast and a student at Lovely Professional University (LPU), 
            currently pursuing my B.Tech in Computer Science. With a strong foundation in networking and access control mechanisms, 
            I have a growing interest in ethical hacking, system security, and user authentication protocols.
          </p>
          
          <div className="flex items-start gap-2 mt-4">
            <Award className="h-5 w-5 text-cipher-primary mt-1 flex-shrink-0" />
            <p>
              Over the past few years, I have developed practical skills through academic projects and self-learning in areas like 
              firewalls, encryption, intrusion detection systems, and network monitoring tools such as Wireshark. I also cleared the 
              CompTIA Network+ global certification, which further strengthened my understanding of network infrastructure and security protocols.
            </p>
          </div>
          
          <div className="flex items-start gap-2 mt-4">
            <BookOpen className="h-5 w-5 text-cipher-primary mt-1 flex-shrink-0" />
            <p>
              This cybersecurity internship project is an exciting opportunity for me to apply my technical knowledge in real-world scenarios 
              and gain hands-on experience in securing digital environments. I am passionate about contributing to cybersecurity advancements 
              and building robust solutions to protect data and systems.
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-col space-y-4">
          <h3 className="font-medium text-lg text-cipher-primary">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <Button variant="outline" className="flex items-center justify-start gap-2 h-10" asChild>
              <a href="mailto:pganeshkrishnareddy@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4 text-cipher-primary" />
                <span className="truncate">pganeshkrishnareddy@gmail.com</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center justify-start gap-2 h-10" asChild>
              <a href="tel:+918374622779">
                <Phone className="h-4 w-4 text-cipher-primary" />
                <span>+91-8374622779</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center justify-start gap-2 h-10" asChild>
              <a href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 text-cipher-primary" />
                <span>pganeshkrishnareddy</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center justify-start gap-2 h-10" asChild>
              <a href="https://github.com/ganeshkrishnareddy" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-cipher-primary" />
                <span>My GitHub Profile</span>
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
