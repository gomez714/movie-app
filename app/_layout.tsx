import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
  useEffect(() => {
    // Hide navigation bar on Android
    NavigationBar.setVisibilityAsync("hidden");
  }, []);

  return (
    <>
      <StatusBar style="light" hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
