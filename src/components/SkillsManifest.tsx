"use client";

import React from "react";
import { WireframePane } from "@/components/ui/WireframePane";

import { skills } from "@/data/skills";

export function SkillsManifest() {
  return (
    <WireframePane label="SYSTEM_CAPABILITIES" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-mono text-sm">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col space-y-2">
            <h3 className="text-primary font-bold tracking-widest mb-3 border-b border-dashed border-primary/30 pb-2 bloom">
              [{group.category}]
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-foreground flex items-center before:content-['>'] before:text-muted-foreground before:mr-2 hover:text-primary transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WireframePane>
  );
}
