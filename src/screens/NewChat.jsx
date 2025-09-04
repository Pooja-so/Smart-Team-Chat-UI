/**
 * NewChat allows creating a new conversation and generating an icebreaker.
 * Single responsibility: collect participant and emit creation with sample message.
 */
import { useState } from "react";
import Toolbar from "../components/ui/Toolbar";
import Panel from "../components/ui/Panel";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

export default function NewChat({ onBack, onCreate }) {
  const [name, setName] = useState("");
  const [icebreaker, setIcebreaker] = useState("");

  function generateIcebreaker() {
    setIcebreaker(
      "Hey there! Quick intro: I’m exploring a new idea and would love your thoughts. Would you be open to a short chat this week?"
    );
  }

  function handleCreate() {
    if (!name.trim()) return;
    onCreate(name.trim(), icebreaker);
  }

  return (
    <div className="space-y-4">
      <Toolbar title="New Chat">
        <Button variant="ghost" className="md:hidden" onClick={onBack}>
          ← Back
        </Button>
      </Toolbar>

      <div className="grid gap-2">
        <label className="text-md text-neutral-400">Participant name</label>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Jordan Lee"
        />
      </div>

      <div className="flex gap-4">
        <Button
          variant="secondary"
          disabled={!name.trim()}
          onClick={generateIcebreaker}
        >
          Generate Icebreaker
        </Button>
        <Button onClick={handleCreate} disabled={!name.trim()}>
          Create Chat
        </Button>
      </div>

      {icebreaker && (
        <Panel dashed>
          <div className="text-xs text-neutral-400 mb-1">AI Icebreaker</div>
          <div>{icebreaker}</div>
        </Panel>
      )}
    </div>
  );
}
