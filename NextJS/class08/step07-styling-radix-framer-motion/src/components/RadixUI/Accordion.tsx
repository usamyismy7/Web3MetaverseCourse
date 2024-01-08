"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function AccordionComponent() {
  const data = [
    {
      id: 1,
      title: "Is item 1 accessible?",
      content: "Yes, it is static.",
    },
    {
      id: 2,
      title: "Is item 2 responsive?",
      content: "Yes, it is static.",
    },
    {
      id: 3,
      title: "Is item 3 reusable?",
      content: "Yes, it is static.",
    },
  ];
  return (
    <div className="max-w-xl mr-10">
      <Accordion.Root
        type="single"
        collapsible
        className="w-full focus-within:ring focus-within:ring-teal-600 bg-gray-500 rounded-lg shadow-lg m-20 p-6"
      >
        {data.map((item: any) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full h-6 group">
                <h3 className="text-gray-800 font-semibold text-base">
                  {item.title}
                </h3>
                <ChevronDownIcon className="group-data-[state=open]:rotate-180 transition-all duration-300 ease-in-out" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:bg-gray-300 px-2 rounded-md">
              <p className="text-sm text-gray-600 py-4">{item.content}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
