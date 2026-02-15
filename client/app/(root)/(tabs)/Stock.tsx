import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import AddProductForm from '@/components/AddProductForm';
import UpdateStockForm from '@/components/UpdateStockForm';

const Stock = () => {
  // Bumping this forces UpdateStockForm to re-fetch products after a new one is added
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ alignItems: 'center', paddingTop: 24, paddingBottom: 140 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Add Product Section */}
        <View className="w-[92%] mb-2">
          <Text className="text-foreground text-2xl font-bold">Add Product</Text>
          <Text className="text-muted-foreground text-sm mt-1">
            Add a new product to your inventory.
          </Text>
        </View>
        <View className="w-[92%] mb-8">
          <AddProductForm onSuccess={() => setRefreshKey((k) => k + 1)} />
        </View>

        {/* Update Stock Section */}
        <View className="w-[92%] mb-2">
          <Text className="text-foreground text-2xl font-bold">Update Stock</Text>
          <Text className="text-muted-foreground text-sm mt-1">
            Add units to an existing product's stock.
          </Text>
        </View>
        <View className="w-[92%]">
          <UpdateStockForm refreshKey={refreshKey} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Stock;
