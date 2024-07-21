'use client';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email(),
});

const SubscribeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isSubmiting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col lg:flex-row gap-3'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='no-focus w-full lg:min-w-[320px]'
                  placeholder='Write your email'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className={cn(
            `bg-blue-primary-light min-w-[137px] flex items-center gap-2 hover:bg-blue-primary-light/90 transition text-white font-bold`
          )}
        >
          {isSubmiting ? (
            <>
              <span>Subscribing</span>
              <Loader2 className='size-5 animate-spin' />
            </>
          ) : (
            'Get Started'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeForm;
