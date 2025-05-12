
import { useState } from "react";
import { encrypt, decrypt } from "@/lib/caesar-cipher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { CipherResult } from "@/components/CipherResult";
import { CipherExplanation } from "@/components/CipherExplanation";
import { toast } from "sonner";
import { LockIcon, UnlockIcon } from "lucide-react";

export function CaesarCipher() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleProcess = () => {
    if (!message.trim()) {
      toast.error("Please enter a message to process");
      return;
    }

    try {
      const processed = mode === "encrypt" 
        ? encrypt(message, shift)
        : decrypt(message, shift);
      
      setResult(processed);
      
      toast.success(`Message ${mode === "encrypt" ? "encrypted" : "decrypted"} successfully`);
    } catch (error) {
      console.error("Error processing message:", error);
      toast.error("An error occurred while processing your message");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-cipher-primary">Caesar Cipher</h1>
        <p className="text-gray-500 mt-2">
          Encrypt and decrypt messages using the classic Caesar Cipher
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="shift">Shift Value: {shift}</Label>
              <Input 
                type="number"
                min="1"
                max="25"
                value={shift}
                onChange={(e) => setShift(Math.min(25, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-16 h-8 text-center"
              />
            </div>
            <Slider
              id="shift"
              min={1}
              max={25}
              step={1}
              value={[shift]}
              onValueChange={(value) => setShift(value[0])}
              className="py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <Button
              variant={mode === "encrypt" ? "default" : "outline"}
              onClick={() => setMode("encrypt")}
              className={mode === "encrypt" ? "bg-cipher-primary hover:bg-cipher-secondary" : ""}
            >
              <LockIcon className="h-4 w-4 mr-2" />
              Encrypt
            </Button>
            <Button
              variant={mode === "decrypt" ? "default" : "outline"}
              onClick={() => setMode("decrypt")}
              className={mode === "decrypt" ? "bg-cipher-primary hover:bg-cipher-secondary" : ""}
            >
              <UnlockIcon className="h-4 w-4 mr-2" />
              Decrypt
            </Button>
          </div>
          
          <Button 
            className="w-full bg-cipher-primary hover:bg-cipher-secondary"
            onClick={handleProcess}
          >
            {mode === "encrypt" ? "Encrypt Message" : "Decrypt Message"}
          </Button>

          {result && (
            <CipherResult 
              result={result} 
              label={mode === "encrypt" ? "Encrypted Message" : "Decrypted Message"} 
            />
          )}
        </div>
      </div>

      <CipherExplanation />
    </div>
  );
}
