'use client';
import React, { useState } from 'react';

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
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { addNewTag } from '@/lib/actions/tag.action';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Tag must have at least one charachter!' })
    .trim(),
  id: z.number().optional(),
});

const TagForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onToggleFormOpen = () => setIsFormOpen((prev) => !prev);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await addNewTag({ ...values });
      form.reset();
      onToggleFormOpen();
    } catch (error) {
      console.error(error);
    }
  };

  const isSubmiting = form.formState.isSubmitting;

  if (!isFormOpen)
    return (
      <Button className='zinc-sm' onClick={onToggleFormOpen}>
        Add Tag
      </Button>
    );

  return (
    <>
      <Button
        onClick={onToggleFormOpen}
        disabled={isSubmiting}
        type='submit'
        className='zinc-sm'
      >
        Cancel
      </Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col lg:flex-row gap-3'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='no-focus w-full lg:min-w-[320px]'
                    placeholder='Write tag name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={isSubmiting}
            className={cn(`zinc-xl`)}
          >
            {isSubmiting ? (
              <>
                <span>Submiting</span>
                <Loader2 className='size-5 animate-spin' />
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default TagForm;
