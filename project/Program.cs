using System;
namespace Treehouse.FirstApp
{
  class Program
  {
      static void Main()
      {
          // Prompt user for minutes exercised 
          Console.Write("Enter how many minutes you exercised: ");
        
       string entry = Console.ReadLine();
          // Add minutes exercised to total 
          // Display total minutes exercised to the screen 
        Console.WriteLine("you have entered " + entry + " minutes");
          // Repeat until user quits    
      }
  }
}
