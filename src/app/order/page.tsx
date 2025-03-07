"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Order() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    itemDescription: "",
    file: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if (!formData.file) {
    //   alert("Please select a file");
    //   return;
    // }

    // const reader = new FileReader();
    // reader.onload = async () => {
    //   const buffer = reader.result as ArrayBuffer;
    //   const uint8Array = new Uint8Array(buffer);

      try {
        const response = await fetch(`https://fragrance-backend.onrender.com/labs/submit-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            // file: Array.from(uint8Array),
          }),
        });

        if (response.ok) {
          alert("Order submitted successfully!");
        } else {
          alert("Failed to submit order");
        }
      } catch (error) {
        console.error("Error submitting order:", error);
        alert("Error submitting order");
      }
    // };

    // reader.readAsArrayBuffer(formData.file);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Order Your Pendant</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="customerName">Your Name</Label>
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="itemDescription">Item Description</Label>
              <Input
                id="itemDescription"
                name="itemDescription"
                placeholder="E.g., Blue cotton t-shirt"
                value={formData.itemDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="file">Upload Photo (Optional)</Label>
              <Input
                id="file"
                name="file"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}