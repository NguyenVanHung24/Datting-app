using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class AppUser
    {
     public int Id { get; set; }
     public string? UserName { get; set; }
     private int myVar;
     public int MyProperty
     {
        get { return myVar; }
        set { myVar = value; }
     }
     
    }
}