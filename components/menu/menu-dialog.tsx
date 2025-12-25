"use client"

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { MenuSection } from "@/components/sections/menu-section"
import { motion } from "framer-motion"

interface MenuDialogProps {
  language: "tr" | "en"
  isOpen: boolean
  onClose: () => void
}

export function MenuDialog({ language, isOpen, onClose }: MenuDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full h-[100dvh] max-h-[100dvh] p-0 gap-0 overflow-hidden border-0 rounded-none">
        <div className="flex flex-col h-full bg-gradient-to-br from-background via-primary/5 to-accent/5">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-xl border-b-2 border-primary/20 shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="/logo.png" className="w-12 h-12 object-contain rounded-full shadow-lg ring-2 ring-primary/30" alt="Logo" />
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Monobadi
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {language === "tr" ? "Menü" : "Menu"}
                  </p>
                </div>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-5 h-5" />
                </Button>
              </DialogClose>
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <MenuSection language={language} />
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}