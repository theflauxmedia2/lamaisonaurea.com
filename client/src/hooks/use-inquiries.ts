import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InquiryInput } from "@shared/routes";

// POST /api/inquiries
export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      const validated = api.inquiries.create.input.parse(data);
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Failed to submit inquiry');
      }
      return api.inquiries.create.responses[201].parse(await res.json());
    },
  });
}
