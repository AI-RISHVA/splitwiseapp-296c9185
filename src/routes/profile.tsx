import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_MODE } from "@/lib/config";
import { demoUser } from "@/lib/demo-data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Splitly" },
      { name: "description", content: "Manage your Splitly account details." },
      { property: "og:title", content: "Profile — Splitly" },
      { property: "og:description", content: "Manage your Splitly account details." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell
      title="Profile"
      description="Account details"
      action={<Button size="sm">Save changes</Button>}
    >
      <section className="surface-card max-w-xl space-y-5 p-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue={demoUser.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={demoUser.email} />
        </div>
        <p className="text-sm text-muted-foreground">
          {DEMO_MODE
            ? "Abhi demo data chal raha hai — backend URL milte hi ye form asli account se jud jayega."
            : "Connected to your backend."}
        </p>
      </section>
    </AppShell>
  );
}
