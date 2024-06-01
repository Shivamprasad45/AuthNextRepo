"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  sector: z.string().nonempty(),
  country: z.string().nonempty(),
  scope1: z.number(),
  scope2: z.number().min(0).max(8).optional(),
  scope3: z.number().min(0).max(8).optional(),
  recordyear: z.string().min(4).max(4).optional(),
  unit: z.string().optional(),
  EmissonIntesity: z.number().optional(),
  Derivedby: z.string().optional(),
  Esg: z.any().optional(),
  Childlobour: z.any().optional(),
  Childlobourfree: z.boolean().optional().default(false),
  msme: z.boolean().optional().default(false),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sector: "",
      country: "",
      recordyear: "2023",
      Childlobour: null,
      Esg: null,
      Childlobourfree: true,
      Derivedby: "self required",
      scope1: 0,
      scope2: 0,
      scope3: 0,
      EmissonIntesity: 0,
      msme: true,
      unit: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    //   <div className="flex items-center space-x-3">
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="name">Name</Label>
    //       <Input defaultValue="TATA MOTORS" {...register("name")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Label>Sector</Label>
    //       <Input
    //         defaultValue="Manufacturing"
    //         {...register("sector", { required: true })}
    //       />
    //     </div>
    //   </div>

    //   <div className="flex items-center space-x-3">
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="country">Country</Label>
    //       <Input defaultValue="India" {...register("country")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Label>Record Year</Label>
    //       <Input defaultValue="2003" {...register("recordYear")} />
    //     </div>
    //   </div>

    //   <div className="flex items-center space-x-3">
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="scope1">Scope 1</Label>
    //       <Input defaultValue="1.2" {...register("scope1")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="scope2">Scope 2</Label>
    //       <Input defaultValue="1" {...register("scope2")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="scope3">Scope 3</Label>
    //       <Input defaultValue="3.4" {...register("scope3")} />
    //     </div>
    //   </div>

    //   <div className="flex items-center space-x-3">
    //     <div className="flex space-x-2 items-center">
    //       <Label htmlFor="emission_intensity">Emission Intensity</Label>
    //       <Input defaultValue="3" {...register("emission_intensity")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Label>Unit</Label>
    //       <Input defaultValue="400" {...register("emission_intensity_unit")} />
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Select>
    //         <SelectTrigger className="w-[180px]">
    //           <SelectValue {...register("Deriverdby")} />
    //         </SelectTrigger>
    //         <SelectContent>
    //           <SelectItem value="Self required">Self required</SelectItem>
    //           <SelectItem value="required">required</SelectItem>
    //         </SelectContent>
    //       </Select>
    //     </div>
    //   </div>

    //   <div className="flex items-center space-x-3">
    //     <div className="flex space-x-2 items-center">
    //       <div className="grid w-full max-w-sm items-center gap-1.5">
    //         <Label htmlFor="picture">Esg</Label>
    //         <Input id="picture" type="file" {...register("link_childlabour")} />
    //       </div>
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <div className="grid w-full max-w-sm items-center gap-1.5">
    //         <Label htmlFor="picture">childlabour</Label>
    //         <Input id="picture" type="file" {...register("link_childlabour")} />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex items-center space-x-3">
    //     <div className="flex items-center space-x-2">
    //       <Checkbox id="terms" {...register("childlabourfree")} />
    //       <label
    //         htmlFor="terms"
    //         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //       >
    //         childlabourfree
    //       </label>
    //     </div>
    //     <div className="flex space-x-2 items-center">
    //       <Checkbox id="terms" {...register("msme")} />
    //       <label
    //         htmlFor="terms"
    //         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //       >
    //         msme
    //       </label>
    //     </div>
    //   </div>

    //   <Button type="submit">Submit</Button>

    //   {/* errors will return when field validation fails  */}
    //   {errors.unit && <span>This field is required</span>}
    // </form>'
    <section className="max-w-screen-2xl w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex space-x-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sector"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sector</FormLabel>
                  <FormControl>
                    <Input placeholder="Sector" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex space-x-2">
            {" "}
            <FormField
              control={form.control}
              name="scope1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scope 1</FormLabel>
                  <FormControl>
                    <Input placeholder="scope1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scope2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scope 2</FormLabel>
                  <FormControl>
                    <Input placeholder="scope2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scope3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scope 3</FormLabel>
                  <FormControl>
                    <Input placeholder="scope3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recordyear"
              render={({ field }) => (
                <FormItem className="max-w-xs">
                  <FormLabel>Record year </FormLabel>
                  <FormControl>
                    <Input placeholder="recordyear" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center text-xs justify-between">
            {" "}
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem className=" flex flex-col ">
                  <FormLabel>unit</FormLabel>
                  <FormControl>
                    <Input className="w-1/2" placeholder="unit" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="EmissonIntesity"
              render={({ field }) => (
                <FormItem className=" flex flex-col ">
                  <FormLabel>Emisson Intesity</FormLabel>
                  <FormControl>
                    <Input
                      className=" "
                      placeholder="Emisson Intesity"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Derivedby"
              render={({ field }) => {
                return (
                  <FormItem className="min-w-52">
                    <FormLabel>Derived by</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select " />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Self required ">
                          Self required{" "}
                        </SelectItem>
                        <SelectItem value="Derived">Derived</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <FormField
              control={form.control}
              name="Esg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Esg</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Childlobour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Childlobour</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-1 mt-3">
              {" "}
              <FormField
                control={form.control}
                name="Childlobourfree"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Childlobourfree
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="msme"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor="msme"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        msme
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
