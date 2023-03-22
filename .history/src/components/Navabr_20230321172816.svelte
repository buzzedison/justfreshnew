<!-- src/components/Navbar.svelte -->
<script>
  import {
    HomeIcon,
    MailIcon,
    ShoppingCartIcon,
    ChatIcon,
    UserGroupIcon,
  } from "@heroicons/react/solid";
</script>

<nav class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <div class="text-2xl font-bold text-green-600">HealthyStore</div>
      <ul class="flex items-center space-x-4 text-gray-700">
        <li>
          <a href="/" class="hover:text-green-600">
            <HomeIcon class="w-5 h-5 inline-block mr-1" />
            About
          </a>
        </li>
        <li>
          <a href="/juices" class="hover:text-green-600">
            <ShoppingCartIcon class="w-5 h-5 inline-block mr-1" />
            Juices
          </a>
        </li>
        <li>
          <a href="/groceries" class="hover:text-green-600">
            <UserGroupIcon class="w-5 h-5 inline-block mr-1" />
            Groceries
          </a>
        </li>
        <li>
          <a href="/marketplace" class="hover:text-green-600">
            <ChatIcon class="w-5 h-5 inline-block mr-1" />
            Marketplace
          </a>
        </li>
        <li>
          <a href="/packages" class="hover:text-green-600">
            <MailIcon class="w-5 h-5 inline-block mr-1" />
            Packages
          </a>
        </li>
        <li>
          <a href="/contact" class="hover:text-green-600">
            <HomeIcon class="w-5 h-5 inline-block mr-1" />
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
