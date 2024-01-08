"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  Button,
  Flex,
  Box,
  Code,
  Heading,
} from "@radix-ui/themes";

function AlertButton() {
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button>Revoke access</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid">Revoke access</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Box>
        <Heading>First code when you start programming</Heading>
        <Code>console.log("Hello World")</Code>
      </Box>
    </Flex>
  );
}

export default AlertButton;
