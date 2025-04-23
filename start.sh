#!/bin/sh
echo "Running migrations..."
pnpx prisma migrate deploy

# check if migration was successful
if [ $? -eq 0 ]; then
  echo "Migrations completed successfully"
else
  echo "Migration failed! The application may not work correctly."
  # We continue anyways, as the application might still work with the existing schema
fi

# Start the application
echo "Starting Vite preview server..."
exec pnpm start