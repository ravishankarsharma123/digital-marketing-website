"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
import { ArrowRight } from "lucide-react"

export function AnimatedCard({ 
  title, 
  description, 
  icon, 
  badge, 
  gradient = "from-blue-500 to-purple-600",
  className,
  children,
  onShowDetails,
  ...props 
}) {
  return (
    <Card 
      className={cn(
        "group cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105",
        className
      )}
      {...props}
    >
      {/* Gradient overlay */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500", gradient)} />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          {icon && (
            <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white", gradient)}>
              {icon}
            </div>
          )}
          {badge && (
            <Badge variant="secondary" className="ml-auto">
              {badge}
            </Badge>
          )}
        </div>
        {title && (
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="relative">
        {children}
        {onShowDetails && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-4 group/btn"
            onClick={(e) => {
              e.stopPropagation();
              onShowDetails({ title, description, icon, badge });
            }}
          >
            Show Details
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
