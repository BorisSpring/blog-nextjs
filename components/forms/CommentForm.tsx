'use client';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  comment: z
    .string()
    .min(1, { message: 'Comment must have at least one charachter!' })
    .trim(),
});

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  const isSubmiting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full relative'>
        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={4}
                  className='no-focus w-full relative p-3 text-zinc-500'
                  placeholder='Leave your comment here...'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmiting}
          type='submit'
          className={cn(
            `bg-blue-primary-light disabled:cursor-wait disabled:bg-blue-primary-light/70 absolute bottom-2 right-2 min-w-[137px] flex items-center gap-2 hover:bg-blue-primary-light/90 transition text-white font-bold`
          )}
        >
          {isSubmiting ? (
            <>
              <span>Posting...</span>
              <Loader2 className='size-5 animate-spin' />
            </>
          ) : (
            'Post Comment'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CommentForm;
