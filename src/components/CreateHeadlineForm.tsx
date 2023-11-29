"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/form-components/button";
import { Checkbox } from "@/components/form-components/checkbox";
import { Input } from "@/components/form-components/input";
import { Label } from "@/components/form-components/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/form-components/radio-group";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/form-components/select";
import { Textarea } from "@/components/form-components/textarea";

export default function CreateHeadlineForm() {
  const { control, handleSubmit } = useForm(); // We will define the form schema and validation rules later

  // Dummy category tags, to be replaced with dynamic data from your API
  const categoryTags = ["News", "Updates", "Events"];

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Label>Hyperlink</Label>
      <Input {...control.register("hyperlink")} />

      <Label>Category Tag</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Category Tag" />
        </SelectTrigger>
        <SelectContent>
          {categoryTags.map((tag) => (
            <SelectItem key={tag} value={tag}>
              {tag}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>New Category Tag</Label>
      <Input {...control.register("newCategoryTag")} />

      <Label>Headline Content</Label>
      <Textarea {...control.register("headlineContent")} />

      <Label>Is Breaking News?</Label>
      <RadioGroup>
        <RadioGroupItem value="yes" id="yes">
          <Label htmlFor="yes">Yes</Label>
        </RadioGroupItem>
        <RadioGroupItem value="no" id="no">
          <Label htmlFor="no">No</Label>
        </RadioGroupItem>
      </RadioGroup>

      <Button type="submit">Submit</Button>
    </form>
  );
}
