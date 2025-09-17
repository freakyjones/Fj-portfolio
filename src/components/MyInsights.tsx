"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookOpen, TrendingUp, Users, Target, Quote } from "lucide-react";
import { interests, currentReads, insights } from "@/data/insightsData";

export function MyInsights() {
  return (
    <section id="insights" className="bg-muted/20 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Beyond Technology
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            A well-rounded perspective shaped by curiosity about global affairs,
            strategic thinking, and continuous learning across diverse domains
          </p>
        </motion.div>

        {/* Core Interests */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border group h-full rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex rounded-2xl p-4 ${interest.bgColor} ${interest.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <interest.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-4 text-xl font-bold">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mb-20 grid gap-12 lg:grid-cols-2">
          {/* Current Reading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border h-full rounded-3xl shadow-lg">
              <CardHeader className="pb-6">
                <div className="mb-3 flex items-center gap-3">
                  <BookOpen className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-2xl font-bold">
                    Current Reading
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Books that shape my worldview and inform my approach to
                  problem-solving
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentReads.map((book, index) => (
                  <motion.div
                    key={`${book.title}-${book.author}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 hover:bg-muted group flex items-center gap-4 rounded-2xl p-4 transition-colors"
                  >
                    <div className="bg-primary h-3 w-3 flex-shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125" />
                    <div className="flex-1">
                      <div className="text-foreground font-medium">
                        {book.title}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        by {book.author}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-border bg-background text-xs"
                    >
                      {book.category}
                    </Badge>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-muted w-full rounded-2xl"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Reading List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Insights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border h-full rounded-3xl shadow-lg">
              <CardHeader className="pb-6">
                <div className="mb-3 flex items-center gap-3">
                  <Users className="text-accent h-6 w-6" />
                  <h3 className="text-foreground text-2xl font-bold">
                    Recent Thoughts
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Insights on technology, strategy, and the intersection of
                  global trends with development
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {insights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 hover:bg-muted group cursor-pointer rounded-2xl p-4 transition-colors"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h4 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                        {insight.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="border-border bg-background ml-2 flex-shrink-0 text-xs"
                      >
                        {insight.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {insight.description}
                    </p>
                    <div className="text-muted-foreground/70 text-xs">
                      {insight.readTime}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-foreground hover:bg-muted w-full rounded-2xl"
                  >
                    <Target className="mr-2 h-4 w-4" />
                    Read More Insights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="from-primary/5 to-accent/5 border-primary/20 rounded-3xl bg-gradient-to-br shadow-lg">
            <CardContent className="p-10 text-center">
              <Quote className="text-primary/60 mx-auto mb-6 h-12 w-12" />
              <blockquote className="text-foreground mb-6 text-xl leading-relaxed font-medium italic md:text-2xl lg:text-3xl">
                "The best developers understand not just how to build systems,
                but why those systems matter in the broader context of human
                progress and global connectivity."
              </blockquote>
              <cite className="text-primary text-lg font-semibold">
                — Freaky Jones
              </cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
